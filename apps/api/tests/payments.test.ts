import { describe, it, expect, vi, beforeEach } from 'vitest';
import request from 'supertest';
import express from 'express';
import paymentsRouter from '../src/routes/payments.routes';
import { PaymentsService } from '../src/services/payments.service';

vi.mock('../src/services/payments.service');

const app = express();
app.use(express.json());
app.use('/api/v1/payments', paymentsRouter);

const mockService = vi.mocked(PaymentsService.prototype);

const mockPayment = {
  id:              'pay_1',
  userId:          'user-uuid-123',
  amount:          1000,
  currency:        'usd',
  status:          'pending' as const,
  stripePaymentId: 'pi_stripe_123',
  metadata:        null,
  createdAt:       new Date('2026-01-01'),
  updatedAt:       new Date('2026-01-01'),
};

const mockIntent = {
  id:           'pi_stripe_123',
  clientSecret: 'pi_stripe_123_secret_xxx',
  status:       'pending' as const,
  amount:       1000,
  currency:     'usd',
};

beforeEach(() => vi.clearAllMocks());

describe('GET /api/v1/payments', () => {
  it('returns 200 with paginated list', async () => {
    mockService.list.mockResolvedValue({ data: [mockPayment], total: 1 });

    const res = await request(app).get('/api/v1/payments?page=1&limit=20');

    expect(res.status).toBe(200);
    expect(res.body.error).toBeNull();
    expect(res.body.data).toHaveLength(1);
    expect(res.body.meta).toMatchObject({ total: 1 });
  });

  it('rejects limit > 100 with 400', async () => {
    const res = await request(app).get('/api/v1/payments?limit=999');
    expect(res.status).toBe(400);
  });
});

describe('GET /api/v1/payments/:id', () => {
  it('returns 200 with payment data', async () => {
    mockService.getById.mockResolvedValue(mockPayment);

    const res = await request(app).get('/api/v1/payments/pay_1');

    expect(res.status).toBe(200);
    expect(res.body.data).toMatchObject({ id: 'pay_1', amount: 1000 });
  });
});

describe('POST /api/v1/payments/intent', () => {
  it('returns 201 with clientSecret on valid input', async () => {
    mockService.createIntent.mockResolvedValue(mockIntent);

    const res = await request(app)
      .post('/api/v1/payments/intent')
      .send({ amount: 1000, currency: 'usd', userId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11' });

    expect(res.status).toBe(201);
    expect(res.body.data).toHaveProperty('clientSecret');
  });

  it('returns 400 when amount < 50 (Stripe minimum)', async () => {
    const res = await request(app)
      .post('/api/v1/payments/intent')
      .send({ amount: 10, currency: 'usd', userId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11' });

    expect(res.status).toBe(400);
  });

  it('returns 400 on invalid userId', async () => {
    const res = await request(app)
      .post('/api/v1/payments/intent')
      .send({ amount: 1000, currency: 'usd', userId: 'not-a-uuid' });

    expect(res.status).toBe(400);
  });
});

describe('POST /api/v1/payments/:id/confirm', () => {
  it('returns 200 on successful confirmation', async () => {
    mockService.confirm.mockResolvedValue({ ...mockPayment, status: 'succeeded' });

    const res = await request(app)
      .post('/api/v1/payments/pay_1/confirm')
      .send({ paymentMethodId: 'pm_stripe_456' });

    expect(res.status).toBe(200);
    expect(res.body.data.status).toBe('succeeded');
  });
});

describe('POST /api/v1/payments/:id/cancel', () => {
  it('returns 200 on successful cancellation', async () => {
    mockService.cancel.mockResolvedValue({ ...mockPayment, status: 'cancelled' });

    const res = await request(app).post('/api/v1/payments/pay_1/cancel');

    expect(res.status).toBe(200);
    expect(res.body.data.status).toBe('cancelled');
  });
});

describe('POST /api/v1/payments/webhook', () => {
  it('returns 400 when stripe-signature header is missing', async () => {
    const res = await request(app)
      .post('/api/v1/payments/webhook')
      .send({ id: 'evt_1', type: 'payment_intent.succeeded' });

    expect(res.status).toBe(400);
    expect(res.body.error.code).toBe('MISSING_SIGNATURE');
  });
});

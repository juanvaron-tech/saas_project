import { describe, it, expect, vi, beforeEach } from 'vitest';
import request from 'supertest';
import express from 'express';
import usersRouter from '../src/routes/users.routes';
import { UsersService } from '../src/services/users.service';

vi.mock('../src/services/users.service');

const app = express();
app.use(express.json());
app.use('/api/v1/users', usersRouter);

const mockService = vi.mocked(UsersService.prototype);

const mockUser = {
  id: '1',
  name: 'Juan',
  email: 'juan@example.com',
  role: 'user' as const,
  createdAt: new Date('2026-01-01'),
};

beforeEach(() => vi.clearAllMocks());

describe('GET /api/v1/users', () => {
  it('returns 200 with paginated list', async () => {
    mockService.list.mockResolvedValue({ data: [mockUser], total: 1 });

    const res = await request(app).get('/api/v1/users?page=1&limit=20');

    expect(res.status).toBe(200);
    expect(res.body.error).toBeNull();
    expect(res.body.data).toHaveLength(1);
    expect(res.body.meta).toMatchObject({ page: 1, limit: 20, total: 1 });
  });

  it('rejects limit > 100 with 400', async () => {
    const res = await request(app).get('/api/v1/users?limit=999');
    expect(res.status).toBe(400);
  });
});

describe('GET /api/v1/users/:id', () => {
  it('returns 200 with user data', async () => {
    mockService.getById.mockResolvedValue(mockUser);

    const res = await request(app).get('/api/v1/users/1');

    expect(res.status).toBe(200);
    expect(res.body.data).toMatchObject({ id: '1', email: 'juan@example.com' });
  });
});

describe('POST /api/v1/users', () => {
  it('returns 201 on valid input', async () => {
    mockService.create.mockResolvedValue(mockUser);

    const res = await request(app)
      .post('/api/v1/users')
      .send({ name: 'Juan', email: 'juan@example.com', password: 'Secret123!' });

    expect(res.status).toBe(201);
    expect(res.body.data).toMatchObject({ email: 'juan@example.com' });
  });

  it('returns 400 on invalid email', async () => {
    const res = await request(app)
      .post('/api/v1/users')
      .send({ name: 'Juan', email: 'not-an-email', password: 'Secret123!' });

    expect(res.status).toBe(400);
  });

  it('returns 400 on short password', async () => {
    const res = await request(app)
      .post('/api/v1/users')
      .send({ name: 'Juan', email: 'juan@example.com', password: '123' });

    expect(res.status).toBe(400);
  });
});

describe('PUT /api/v1/users/:id', () => {
  it('returns 200 on valid update', async () => {
    mockService.update.mockResolvedValue({ ...mockUser, name: 'Juan Updated' });

    const res = await request(app)
      .put('/api/v1/users/1')
      .send({ name: 'Juan Updated' });

    expect(res.status).toBe(200);
    expect(res.body.data.name).toBe('Juan Updated');
  });
});

describe('DELETE /api/v1/users/:id', () => {
  it('returns 204 on success', async () => {
    mockService.delete.mockResolvedValue(undefined);

    const res = await request(app).delete('/api/v1/users/1');

    expect(res.status).toBe(204);
  });
});

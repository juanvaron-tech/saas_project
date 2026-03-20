import { z } from 'zod';

export const createPaymentIntentSchema = z.object({
  amount:   z.number().int().min(50).describe('Monto en centavos (e.g. 1000 = $10.00)'),
  currency: z.string().length(3).toLowerCase().default('usd'),
  userId:   z.string().uuid(),
  metadata: z.record(z.string()).optional(),
});

export const confirmPaymentSchema = z.object({
  paymentMethodId: z.string().min(1),
});

export const listPaymentsSchema = z.object({
  page:     z.coerce.number().int().min(1).default(1),
  limit:    z.coerce.number().int().min(1).max(100).default(20),
  userId:   z.string().uuid().optional(),
  status:   z.enum(['pending', 'succeeded', 'failed', 'cancelled']).optional(),
});

export const webhookSchema = z.object({
  id:   z.string(),
  type: z.string(),
  data: z.object({ object: z.record(z.unknown()) }),
});

export type CreatePaymentIntentInput = z.infer<typeof createPaymentIntentSchema>;
export type ConfirmPaymentInput      = z.infer<typeof confirmPaymentSchema>;
export type ListPaymentsQuery        = z.infer<typeof listPaymentsSchema>;

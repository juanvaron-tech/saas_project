import {
  type CreatePaymentIntentInput,
  type ConfirmPaymentInput,
  type ListPaymentsQuery,
} from '../schemas/payments.schema';
import { type Payment, type PaymentIntent } from '../models/payments.model';

// TODO: import Stripe from 'stripe';
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
// TODO: import { prisma } from '../lib/prisma';

export class PaymentsService {
  async list(query: ListPaymentsQuery): Promise<{ data: Payment[]; total: number }> {
    const { page, limit, userId, status } = query;
    // await prisma.payment.findMany({
    //   where: { ...(userId && { userId }), ...(status && { status }) },
    //   skip: (page - 1) * limit,
    //   take: limit,
    //   orderBy: { createdAt: 'desc' },
    // });
    return { data: [], total: 0 };
  }

  async getById(id: string): Promise<Payment> {
    // const payment = await prisma.payment.findUnique({ where: { id } });
    // if (!payment) throw new NotFoundError('Payment not found');
    throw new Error(`getById(${id}) not implemented`);
  }

  async createIntent(input: CreatePaymentIntentInput): Promise<PaymentIntent> {
    // 1. Crear PaymentIntent en Stripe
    // const intent = await stripe.paymentIntents.create({
    //   amount:   input.amount,
    //   currency: input.currency,
    //   metadata: { userId: input.userId, ...input.metadata },
    // });
    //
    // 2. Persistir en DB
    // await prisma.payment.create({
    //   data: {
    //     userId:          input.userId,
    //     amount:          input.amount,
    //     currency:        input.currency,
    //     status:          'pending',
    //     stripePaymentId: intent.id,
    //     metadata:        input.metadata ?? null,
    //   },
    // });
    //
    // return { id: intent.id, clientSecret: intent.client_secret!, status: 'pending', ... };
    throw new Error('createIntent not implemented');
  }

  async confirm(id: string, input: ConfirmPaymentInput): Promise<Payment> {
    // 1. Confirmar el PaymentIntent en Stripe
    // await stripe.paymentIntents.confirm(id, { payment_method: input.paymentMethodId });
    //
    // 2. Actualizar estado en DB (el webhook también lo hace, esto es optimista)
    // return prisma.payment.update({ where: { stripePaymentId: id }, data: { status: 'succeeded' } });
    throw new Error(`confirm(${id}) not implemented`);
  }

  async cancel(id: string): Promise<Payment> {
    // await stripe.paymentIntents.cancel(id);
    // return prisma.payment.update({ where: { id }, data: { status: 'cancelled' } });
    throw new Error(`cancel(${id}) not implemented`);
  }

  async handleWebhook(rawBody: Buffer, signature: string): Promise<void> {
    // const event = stripe.webhooks.constructEvent(
    //   rawBody,
    //   signature,
    //   process.env.STRIPE_WEBHOOK_SECRET!
    // );
    //
    // switch (event.type) {
    //   case 'payment_intent.succeeded':
    //     await prisma.payment.update({ where: { stripePaymentId: event.data.object.id }, data: { status: 'succeeded' } });
    //     break;
    //   case 'payment_intent.payment_failed':
    //     await prisma.payment.update({ where: { stripePaymentId: event.data.object.id }, data: { status: 'failed' } });
    //     break;
    // }
    throw new Error('handleWebhook not implemented');
  }
}

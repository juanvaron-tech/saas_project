import { type Request, type Response, type NextFunction } from 'express';
import { PaymentsService } from './payments.service';
import {
  createPaymentIntentSchema,
  confirmPaymentSchema,
  listPaymentsSchema,
} from './payments.schema';

const service = new PaymentsService();

function ok<T>(res: Response, data: T, meta: Record<string, unknown> = {}) {
  res.json({ data, error: null, meta });
}

export const PaymentsController = {
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const query = listPaymentsSchema.parse(req.query);
      const result = await service.list(query);
      ok(res, result.data, { page: query.page, limit: query.limit, total: result.total });
    } catch (err) {
      next(err);
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const payment = await service.getById(req.params.id);
      ok(res, payment);
    } catch (err) {
      next(err);
    }
  },

  async createIntent(req: Request, res: Response, next: NextFunction) {
    try {
      const input = createPaymentIntentSchema.parse(req.body);
      const intent = await service.createIntent(input);
      res.status(201).json({ data: intent, error: null, meta: {} });
    } catch (err) {
      next(err);
    }
  },

  async confirm(req: Request, res: Response, next: NextFunction) {
    try {
      const input = confirmPaymentSchema.parse(req.body);
      const payment = await service.confirm(req.params.id, input);
      ok(res, payment);
    } catch (err) {
      next(err);
    }
  },

  async cancel(req: Request, res: Response, next: NextFunction) {
    try {
      const payment = await service.cancel(req.params.id);
      ok(res, payment);
    } catch (err) {
      next(err);
    }
  },

  /** Webhook de Stripe — NO usa authenticate, valida firma HMAC */
  async webhook(req: Request, res: Response, next: NextFunction) {
    try {
      const signature = req.headers['stripe-signature'] as string;
      if (!signature) {
        res.status(400).json({ data: null, error: { code: 'MISSING_SIGNATURE' }, meta: {} });
        return;
      }
      // req.body debe ser el raw Buffer (configurar express.raw en la ruta)
      await service.handleWebhook(req.body as Buffer, signature);
      res.status(200).json({ received: true });
    } catch (err) {
      next(err);
    }
  },
};

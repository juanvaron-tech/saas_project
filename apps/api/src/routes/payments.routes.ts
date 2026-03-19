import { Router } from 'express';
import { PaymentsController } from '../controllers/payments.controller';
// import { authenticate } from '../middleware/auth';
// import { authorize }    from '../middleware/authorize';

const router = Router();

/**
 * GET /api/v1/payments
 * Lista paginada de pagos — requiere auth
 */
router.get('/', /* authenticate, */ PaymentsController.list);

/**
 * GET /api/v1/payments/:id
 * Obtiene un pago por ID — requiere auth
 */
router.get('/:id', /* authenticate, */ PaymentsController.getById);

/**
 * POST /api/v1/payments/intent
 * Crea un PaymentIntent en Stripe — requiere auth
 */
router.post('/intent', /* authenticate, */ PaymentsController.createIntent);

/**
 * POST /api/v1/payments/:id/confirm
 * Confirma un PaymentIntent — requiere auth
 */
router.post('/:id/confirm', /* authenticate, */ PaymentsController.confirm);

/**
 * POST /api/v1/payments/:id/cancel
 * Cancela un PaymentIntent — requiere auth
 */
router.post('/:id/cancel', /* authenticate, */ PaymentsController.cancel);

/**
 * POST /api/v1/payments/webhook
 * Webhook de Stripe — SIN authenticate, valida firma HMAC
 * IMPORTANTE: montar ANTES del middleware express.json() global
 * app.use('/api/v1/payments/webhook', express.raw({ type: 'application/json' }), paymentsRouter)
 */
router.post('/webhook', PaymentsController.webhook);

export default router;

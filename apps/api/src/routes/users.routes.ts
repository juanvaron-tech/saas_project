import { Router } from 'express';
import { UsersController } from '../controllers/users.controller';
// import { authenticate } from '../middleware/auth';
// import { authorize }    from '../middleware/authorize';

const router = Router();

/**
 * GET /api/v1/users
 * Lista paginada de usuarios (requiere auth)
 */
router.get('/', /* authenticate, */ UsersController.list);

/**
 * GET /api/v1/users/:id
 * Obtiene un usuario por ID (requiere auth)
 */
router.get('/:id', /* authenticate, */ UsersController.getById);

/**
 * POST /api/v1/users
 * Crea un nuevo usuario (solo admin)
 */
router.post('/', /* authenticate, authorize('admin'), */ UsersController.create);

/**
 * PUT /api/v1/users/:id
 * Actualiza un usuario (requiere auth + ser el propio usuario o admin)
 */
router.put('/:id', /* authenticate, */ UsersController.update);

/**
 * DELETE /api/v1/users/:id
 * Elimina un usuario (solo admin)
 */
router.delete('/:id', /* authenticate, authorize('admin'), */ UsersController.delete);

export default router;

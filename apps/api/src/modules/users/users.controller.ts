import { type Request, type Response, type NextFunction } from 'express';
import { UsersService } from './users.service';
import {
  createUserSchema,
  updateUserSchema,
  listUsersSchema,
} from './users.schema';

const service = new UsersService();

function ok<T>(res: Response, data: T, meta: Record<string, unknown> = {}) {
  res.json({ data, error: null, meta });
}

function created<T>(res: Response, data: T) {
  res.status(201).json({ data, error: null, meta: {} });
}

export const UsersController = {
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const query = listUsersSchema.parse(req.query);
      const result = await service.list(query);
      ok(res, result.data, { page: query.page, limit: query.limit, total: result.total });
    } catch (err) {
      next(err);
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await service.getById(req.params.id);
      ok(res, user);
    } catch (err) {
      next(err);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const input = createUserSchema.parse(req.body);
      const user = await service.create(input);
      created(res, user);
    } catch (err) {
      next(err);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const input = updateUserSchema.parse(req.body);
      const user = await service.update(req.params.id, input);
      ok(res, user);
    } catch (err) {
      next(err);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await service.delete(req.params.id);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  },
};

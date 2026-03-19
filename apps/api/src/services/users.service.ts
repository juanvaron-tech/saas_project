import { type CreateUserInput, type UpdateUserInput, type ListUsersQuery } from '../schemas/users.schema';
import { type PublicUser } from '../models/users.model';

// TODO: reemplazar con el cliente Prisma real: import { prisma } from '../lib/prisma'

export class UsersService {
  async list(query: ListUsersQuery): Promise<{ data: PublicUser[]; total: number }> {
    const { page, limit } = query;
    // await prisma.user.findMany({ skip: (page - 1) * limit, take: limit, where: { ... } })
    return { data: [], total: 0 };
  }

  async getById(id: string): Promise<PublicUser> {
    // const user = await prisma.user.findUnique({ where: { id } });
    // if (!user) throw new NotFoundError('User not found');
    throw new Error(`getById(${id}) not implemented`);
  }

  async create(input: CreateUserInput): Promise<PublicUser> {
    // const hashed = await bcrypt.hash(input.password, 12);
    // return prisma.user.create({ data: { ...input, password: hashed } });
    throw new Error('create not implemented');
  }

  async update(id: string, input: UpdateUserInput): Promise<PublicUser> {
    // await this.getById(id);  // lanza 404 si no existe
    // return prisma.user.update({ where: { id }, data: input });
    throw new Error(`update(${id}) not implemented`);
  }

  async delete(id: string): Promise<void> {
    // await this.getById(id);
    // await prisma.user.delete({ where: { id } });
    throw new Error(`delete(${id}) not implemented`);
  }
}

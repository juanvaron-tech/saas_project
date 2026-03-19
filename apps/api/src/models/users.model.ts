/** Tipo de usuario tal como se almacena en base de datos */
export interface User {
  id:        string;
  name:      string;
  email:     string;
  role:      'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

/** Vista pública del usuario (sin campos sensibles) */
export type PublicUser = Omit<User, 'updatedAt'>;

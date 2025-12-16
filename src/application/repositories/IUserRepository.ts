import type { User } from '@app/models';

export interface IUserRepository {
	findById(id: User['id']): Promise<User | null>;
	findByEmail(email: User['email']): Promise<User | null>;
	create(user: User): Promise<void>;
	update(user: User): Promise<void>;
}

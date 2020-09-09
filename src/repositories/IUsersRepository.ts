import { User } from '../models/User'

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>
  save(user: User): Promise<void>
}

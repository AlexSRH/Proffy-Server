import { IUsersRepository } from '../IUsersRepository'
import { User } from '../../models/User'

import { db } from '../../database/connection'

export class UsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    const users = await db('users').where('email', '=', email).select('*')

    const savedUser = users[0]

    if (savedUser) {
      const user = new User({
        ...savedUser,
        firstName: savedUser.first_name,
        lastName: savedUser.last_name
      })

      return user
    }
  }

  async save(user: User): Promise<void> {
    await db('users').insert({
      id: user.id,
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      password_hash: user.password
    })
  }
}

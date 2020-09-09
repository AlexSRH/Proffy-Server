import bcrypt from 'bcryptjs'
import * as uuid from 'uuid'

import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateUserRequestDTO } from './ICreateUserDTO'
import { User } from '../..//models/User'

export class CreateUserUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const userData = {
      ...data,
      id: uuid.v4()
    }

    const user = new User(userData)

    const passwordHash = await bcrypt.hash(user.password, 8)

    await this.userRepository.save({ ...user, password: passwordHash })
  }
}

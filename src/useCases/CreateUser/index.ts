import { UsersRepository } from '../../repositories/implementations/UsersRepository'
import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserController } from './CreateUserController'

const userRepository = new UsersRepository()
const createUserUserCase = new CreateUserUseCase(userRepository)
const createUserController = new CreateUserController(createUserUserCase)

export { createUserUserCase, userRepository, createUserController }

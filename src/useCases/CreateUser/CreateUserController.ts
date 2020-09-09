import { Request, Response } from 'express'
import { CreateUserUseCase } from '../../useCases/CreateUser/CreateUserUseCase'

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { firstName, lastName, email, password } = request.body

    try {
      await this.createUserUseCase.execute({
        firstName,
        lastName,
        email,
        password
      })

      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}

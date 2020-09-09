import { Router } from 'express'
import { createUserController } from '../useCases/CreateUser'

const userRoutes = Router()

userRoutes.post('/', async (request, response) => {
  return await createUserController.handle(request, response)
})

export { userRoutes }

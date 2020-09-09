import * as faker from 'faker'
import request from 'supertest'

import { app } from './app'

describe('App - User Routes', () => {
  it('should create user', async () => {
    const response = await request(app).post('/users').send({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    })

    expect(response.status).toBe(201)
  })

  it('should not create a user already created', async () => {
    const userData = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    }

    await request(app).post('/users').send(userData)

    const response = await request(app).post('/users').send(userData)

    expect(response.status).toBe(400)
  })
})

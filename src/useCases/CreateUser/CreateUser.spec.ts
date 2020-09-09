import * as faker from 'faker'
import { createUserUserCase, userRepository } from '.'

describe('Create User Use Case', () => {
  it('should create a user', async () => {
    const userData = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    }

    await createUserUserCase.execute(userData)
    const user = await userRepository.findByEmail(userData.email)

    expect(user.firstName).toBe(userData.firstName)
    expect(user.lastName).toBe(userData.lastName)
    expect(user.email).toBe(userData.email)
  })

  it('should not create a user already created', async () => {
    const userData = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    }

    await createUserUserCase.execute(userData)

    let error

    try {
      await createUserUserCase.execute(userData)
    } catch (err) {
      error = err.message
    }

    expect(error).toBe('User already exists')
  })
})

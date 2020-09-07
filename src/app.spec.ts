import request from 'supertest'
import { app } from './app'

describe('App', () => {
  it('should pass', async () => {
    const response = await request(app).get('/do-not-exist')

    expect(response.status).toBe(404)
  })
})

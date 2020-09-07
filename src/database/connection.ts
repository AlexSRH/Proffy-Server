import knex from 'knex'
import { dbConfig } from '@configs/database'

const db = knex(dbConfig)

export { db }

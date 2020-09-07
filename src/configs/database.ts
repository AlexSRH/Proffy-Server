import 'dotenv/config'
import * as dbConfigs from '~/knexfile'

interface IDbConfigs {
  development: object
  test: object
}

const typedDbConfigs = dbConfigs as IDbConfigs

const dbConfig =
  process.env.NODE_ENV === 'test'
    ? typedDbConfigs.test
    : typedDbConfigs.development

export { dbConfig }

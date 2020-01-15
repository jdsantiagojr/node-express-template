const DOTENV_KEY = Symbol('server.dotenv')

if (!Object.getOwnPropertySymbols(global).includes(DOTENV_KEY)) {
  const config = require('dotenv').config()

  global[DOTENV_KEY] = Object.freeze({
    NODE_ENV: 'development',
    DEBUG: 0,
    HOST: HOST = 'localhost',
    LOG_LEVEL: 'info',
    LOG_FORMAT: 'dev',
    LOG_FILEPATH: `${__dirname}/logs/`,
    PORT: 4000,
    MONGO_PORT: MONGO_PORT = 27017,
    MONGO_HOST: MONGO_HOST = HOST,
    MONGO_DATABASE: MONGO_DATABASE = 'test',
    MONGO_URI: `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`,
    ...config.parsed
  })
}

const singleton = {}

Object.defineProperty(singleton, 'instance', { get () { return global[DOTENV_KEY] } })
Object.freeze(singleton)

module.exports = singleton

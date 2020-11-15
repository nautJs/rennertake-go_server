// Update with your config settings.
require('dotenv').config();
require('custom-env').env('dev', './src/config/env');

const configuration = {

  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST_DEV,
      port: process.env.DB_PORT_DEV,
      user: process.env.DB_USER_DEV,
      password: process.env.DB_PASSWORD_DEV,
      database: process.env.DB_DATABASE_DEV,
      charset: process.env.DB_CHARSET_DEV
    },
    migrations: {
      directory: 'src/models/migrations',
    },
    seeds: {
      directory: 'src/models/seeds'
    }
  },

  test: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST_TEST,
      port: process.env.DB_PORT_TEST,
      user: process.env.DB_USER_TEST,
      password: process.env.DB_PASSWORD_TEST,
      database: process.env.DB_DATABASE_TEST,
      charset: process.env.DB_CHARSET_TEST
    },
    migrations: {
      directory: 'src/models/migrations'
    },
    seeds: {
      directory: 'src/models/seeds'
    }
  },

};

module.exports = configuration;

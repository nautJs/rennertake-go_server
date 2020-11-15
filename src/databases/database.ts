import knex from 'knex';
import dotenv from 'dotenv';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const configuration = require('../../knexfile.js');

dotenv.config();

let configEnviroment;

switch (process.env.NODE_ENV) {
  case 'dev':
    configEnviroment = configuration.development;
    break;
  case 'test':
    configEnviroment = configuration.test;
    break;
  default:
    break;
}

const connection = knex(configEnviroment);
module.exports = connection;

// const knex = require('knex');
// const configuration = require('../../knexfile');

// let configEnviroment;

// switch (process.env.NODE_ENV) {
//     case 'dev':
//         configEnviroment = configuration.development;
//         break;
//     case 'production':
//         configEnviroment = configuration.production;
//         break;
// }

// const connection = knex(configEnviroment);

// module.exports = connection;

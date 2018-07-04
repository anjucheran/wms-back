const fs = require('fs');

module.exports = {
  development: {
    username: 'root',
    password: 'password',
    database: 'wms-dev',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: 'password',
    database: 'wms-test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: 'password',
    database: 'wms-prod',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};

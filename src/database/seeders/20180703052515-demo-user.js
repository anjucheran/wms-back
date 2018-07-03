'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'anju@gmail.com',
      firstName: 'Anju',
      lastName: 'Cheran',
      username: 'anjuc',
      password: 'abcd',
    },
    {
      email: 'akitha@gmail.com',
      firstName: 'Akitha',
      lastName: 'Manjitha',
      username: 'akmanji',
      password: 'abcd',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

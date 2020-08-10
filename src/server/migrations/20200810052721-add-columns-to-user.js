'use strict';

const { query } = require("winston");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Users', 'password', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Users', 'isEmailVerified', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Users', 'verificationToken', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Users', 'passportPhoto', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Users', 'userType', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Users', 'avatar', {
        type: Sequelize.STRING
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Users", "password"),
      queryInterface.removeColumn('Users', 'isEmailVerified'),
      queryInterface.removeColumn('Users', 'avatar'),
      queryInterface.removeColumn('Users', 'passportPhoto'),
      queryInterface.removeColumn('Users', 'userType'),
      queryInterface.removeColumn('Users', 'verificationToken')
    ])
  }
};

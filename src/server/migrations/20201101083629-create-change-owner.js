'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('changeOwners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      regNumber: {
        type: Sequelize.TEXT
      },
      owner: {
        type: Sequelize.TEXT
      },
      ownerTel: {
        type: Sequelize.TEXT
      },
      chasisNo: {
        type: Sequelize.TEXT
      },
      letter: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('changeOwners');
  }
};
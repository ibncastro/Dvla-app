'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('VRegs', [{
      key: '493H34BB432',
      createdAt: new Date(),
      updatedAt: new Date(),
      vehicleId: '1',
      userId: '1'
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('VRegs', null, {})
  }
};

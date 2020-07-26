'use strict';

const { query } = require("winston");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vehicles', [{
      userId: '1',
      regId: '2',
      manufacturer: 'TOYOTA',
      chasisNo: 'DFKI334K4NKN66KK3N',
      bodyType: 'VAN',
      countryOfOrigin: 'USA',
      noOfTyres: '4',
      modelName: 'RAV 4',
      vehicleUse: 'Private',
      noOfAxles: '4',
      noOfDoors: '4',
      engineMadeBy: 'TOYOTA',
      engineNo: 'K4K454NK4LLKLINFDKF',
      noOfCylinders: '4',
      fuelType: 'PETROL',
      horsePower: '400 km/s',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Vehicles', null, {})
  }
};

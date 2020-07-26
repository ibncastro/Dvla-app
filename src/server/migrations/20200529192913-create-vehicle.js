'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Vehicles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      manufacturer: {
        type: Sequelize.TEXT
      },
      chasisNo: {
        type: Sequelize.TEXT
      },
      bodyType: {
        type: Sequelize.TEXT
      },
      countryOfOrigin: {
        type: Sequelize.TEXT
      },  
      noOfTyres: {
        type: Sequelize.INTEGER
      },
      modelName: {
        type: Sequelize.TEXT
      },
      vehicleUse: {
        type: Sequelize.TEXT
      },
      noOfAxles: {
        type: Sequelize.INTEGER
      },
      noOfDoors: {
        type: Sequelize.INTEGER
      },
      engineMadeBy: {
        type: Sequelize.TEXT
      },
      engineNo: {
        type: Sequelize.TEXT
      },
      noOfCylinders: {
        type: Sequelize.INTEGER
      },
      fuelType: {
        type: Sequelize.TEXT
      },
      horsePower: {
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
    return queryInterface.dropTable('Vehicles');
  }
};
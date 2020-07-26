'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // vehicleId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Vehicle',
      //     key: 'id'
      //   },
      //   onDelete: 'SET NULL',
      //   onUpdate: 'cascade',
      // },
      title: {
        type: Sequelize.TEXT
      },
      firstName: {
        type: Sequelize.TEXT
      },
      lastName: {
        type: Sequelize.TEXT
      },
      middleName: {
        type: Sequelize.TEXT
      },
      Gender: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.TEXT
      },
      region: {
        type: Sequelize.TEXT
      },
      dateOfBirth: {
        type: Sequelize.DATE
      },
      nationality: {
        type: Sequelize.TEXT
      },
      idType: {
        type: Sequelize.TEXT
      },
      idNumber: {
        type: Sequelize.TEXT
      },
      houseNo: {
        type: Sequelize.TEXT
      },
      mobileNo1: {
        type: Sequelize.INTEGER
      },
      mobileNo2: {
        type: Sequelize.INTEGER
      },
      postalAddress: {
        type: Sequelize.TEXT
      },
      ghanaPostCode: {
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
    return queryInterface.dropTable('Users');
  }
};
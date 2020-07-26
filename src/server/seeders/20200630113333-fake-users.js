'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      title: 'Mr',
      firstName: 'Samuel',
      lastName: 'Danso',
      middleName: 'Adu',
      Gender: 'Male',
      email: 'SAD@email.com',
      region: 'Greater Accra',
      dateOfBirth: new Date(),
      nationality: 'Ghanaian',
      idType: 'Voters ID',
      idNumber: '55H5EN3',
      houseNo: 'House No 4',
      mobileNo1: '024439488',
      mobileNo2: '034930499',
      ghanaPostCode: 'GBER-E333-55DD-333',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

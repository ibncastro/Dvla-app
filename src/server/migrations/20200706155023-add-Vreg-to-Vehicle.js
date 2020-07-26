'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Vehicles', 'VRegId', {type: Sequelize.INTEGER}),
      queryInterface.addConstraint('Vehicles', ['VRegId'], {
        type: 'foreign key',
        name: 'fk_reg_id',
        references: {
          table: 'VRegs',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }),
      
      ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Vehicles', 'VRegId'),
    ])
  }
};

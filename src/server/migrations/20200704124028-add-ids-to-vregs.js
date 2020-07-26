'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('VRegs', 'userId', {type: Sequelize.INTEGER}),
      queryInterface.addConstraint('VRegs', ['userId'], {
        type: 'foreign key',
        name: 'fk_users_id',
        references: {
          table: 'Users',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }),
      
      ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('VRegs', 'userId'),
    ])
  }
};

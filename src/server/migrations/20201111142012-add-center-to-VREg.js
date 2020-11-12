'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("VRegs", "centerId", {
        type: Sequelize.INTEGER,
      }),

      queryInterface.addConstraint("VRegs", ["centerId"], {
       type: "foreign key",
       name: "fk_cevter_id",
       references: {
         table: "Centers",
         field: "id"
       },
       onDelete: "cascade",
       onUpdate: "cascade"
     })
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("VRegs", "centerId")
    ])
  }
};

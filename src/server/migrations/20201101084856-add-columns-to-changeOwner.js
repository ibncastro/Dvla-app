'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return Promise.all([
    //  queryInterface.addColumn("changeOwners", "UserId", {
    //    type: Sequelize.INTEGER,
    //  }),
    //  queryInterface.addColumn("changeOwners", "VehicleId", {
    //    type: Sequelize.INTEGER
    //  }),
     queryInterface.addConstraint("changeOwners", ["UserId"], {
       type: "foreign key",
       name: "fk_change_id",
       references: {
         table: "Users",
         field: "id"
       },
       onDelete: "cascade",
       onUpdate: "cascade"
     }),
    //  queryInterface.addConstraint("changeOwners", ["VehicleId"], {
    //   type: "foreign key",
    //   name: "fk_vehi_id",
    //   references: {
    //     table: "Vehicles",
    //     field: "id"
    //   },
    //   onDelete: "cascade",
    //   onUpdate: "cascade"
    // }),
   ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("changeOwners", "UserId"),
      // queryInterface.removeColumn("changeOwners", "VehicleId")
    ])
  }
};

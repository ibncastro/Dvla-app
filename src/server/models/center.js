'use strict';
module.exports = (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {   
    name: DataTypes.TEXT,
    code: DataTypes.TEXT
  }, {});
  Center.associate = function(models) {
    Center.hasMany(models.VReg)
  };
  return Center;
};
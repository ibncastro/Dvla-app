'use strict';
module.exports = (sequelize, DataTypes) => {
  const VReg = sequelize.define('VReg', {
    key: DataTypes.STRING,
    vehicleInspectionNo: DataTypes.STRING,
    customsDocNo: DataTypes.STRING,
    roadWorthyCert: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    vehicleId: DataTypes.INTEGER
  }, {});
  VReg.associate = function(models) {
    VReg.belongsTo(models.User);
    VReg.belongsTo(models.Vehicle)
  };
  return VReg;
};
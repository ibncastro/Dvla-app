'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {   
    manufacturer: DataTypes.TEXT,
    chasisNo: DataTypes.TEXT,
    bodyType: DataTypes.TEXT,
    countryOfOrigin: DataTypes.TEXT,
    noOfTyres: DataTypes.INTEGER,
    modelName: DataTypes.TEXT,
    vehicleUse: DataTypes.TEXT,
    noOfAxles: DataTypes.INTEGER,
    noOfDoors: DataTypes.INTEGER,
    engineMadeBy: DataTypes.TEXT,
    engineNo: DataTypes.TEXT,
    noOfCylinders: DataTypes.INTEGER,
    fuelType: DataTypes.TEXT,
    horsePower: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    VRegId: DataTypes.INTEGER
  }, {});
  Vehicle.associate = function(models) {
    Vehicle.belongsTo(models.User)
    Vehicle.belongsTo(models.VReg)
  };
  return Vehicle;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const changeOwner = sequelize.define('changeOwner', {
    regNumber: DataTypes.TEXT,
    owner: DataTypes.TEXT,
    ownerTel: DataTypes.TEXT,
    chasisNo: DataTypes.TEXT,
    letter: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    status: DataTypes.TEXT
  }, {});
  changeOwner.associate = function(models) {
    changeOwner.belongsTo(models.User)
  };
  return changeOwner;
};
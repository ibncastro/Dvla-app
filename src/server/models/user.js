'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    title: DataTypes.TEXT,
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    password: DataTypes.TEXT,
    middleName: DataTypes.TEXT,
    Gender: DataTypes.TEXT,
    email: DataTypes.TEXT,
    isEmailVerified: DataTypes.TEXT,
    verificationToken: DataTypes.TEXT,
    avatar: DataTypes.TEXT,
    region: DataTypes.TEXT,
    dateOfBirth: DataTypes.DATE,
    nationality: DataTypes.TEXT,
    idType: DataTypes.TEXT,
    idNumber: DataTypes.TEXT,
    houseNo: DataTypes.TEXT,
    mobileNo1: DataTypes.INTEGER,
    mobileNo2: DataTypes.INTEGER,
    postalAddress: DataTypes.TEXT,
    ghanaPostCode: DataTypes.TEXT,
    passportPhoto: DataTypes.TEXT,
    userType: DataTypes.TEXT
  }, {});
  User.associate = function(models) {
    User.hasOne(models.Vehicle)
    User.hasMany(models.VReg)
  };
  return User;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Visitor = sequelize.define('Visitor', {
    ip: DataTypes.STRING,
    user_agent: DataTypes.STRING
  }, {});
  Visitor.associate = function(models) {
    // associations can be defined here
  };
  return Visitor;
};
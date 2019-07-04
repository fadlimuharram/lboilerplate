"use strict";
module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define(
    "message",
    {
      msg_number: DataTypes.INTEGER,
      msg_status_code: DataTypes.INTEGER,
      msg_server: DataTypes.STRING,
      msg_client: DataTypes.STRING,
      type: DataTypes.INTEGER
    },
    {
      timestamps: false
    }
  );
  message.associate = function(models) {
    // associations can be defined here
  };
  return message;
};

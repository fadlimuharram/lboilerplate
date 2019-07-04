"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "question_banks",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      question_code_id: DataTypes.STRING,
      question: DataTypes.TEXT,
      image: DataTypes.STRING,
      audio: DataTypes.STRING,
      answer: DataTypes.STRING,
      multiple_choice: DataTypes.TEXT,
      discussion: DataTypes.TEXT,
      difficulty_level: DataTypes.INTEGER,
      is_active: DataTypes.INTEGER,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
      deleted_at: DataTypes.INTEGER,
      created_at: DataTypes.INTEGER,
      updated_at: DataTypes.INTEGER,
      point: DataTypes.DOUBLE,
      topic: DataTypes.INTEGER,
      position: DataTypes.INTEGER
    },
    {
      timestamps: false
    }
  );
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};

const database = require("../models");

exports.getAllUsers = async () => {
  try {
    return await database.user.findAll();
  } catch (error) {
    throw error;
  }
};

exports.findOneUserbyEmail = async email => {
  try {
    return await database.user.findOne({
      where: { email }
    });
  } catch (err) {
    throw err;
  }
};

exports.addUser = async newUser => {
  try {
    return await database.user.create(newUser);
  } catch (err) {
    throw err;
  }
};

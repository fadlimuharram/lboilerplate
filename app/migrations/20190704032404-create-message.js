"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("messages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      msg_number: {
        type: Sequelize.INTEGER
      },
      msg_status_code: {
        type: Sequelize.INTEGER
      },
      msg_server: {
        type: Sequelize.STRING
      },
      msg_client: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("messages");
  }
};

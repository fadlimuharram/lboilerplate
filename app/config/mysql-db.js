// Connection config for MySQL
require("dotenv").config();

module.exports = {
  // If using onine database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },
  development: {
    database: "db_example",
    username: "root",
    password: "root",
    // host: "3.82.215.227",
    host: "127.0.0.1",
    dialect: "mysql",
    dialectModule: require("mysql2"),
    port: "8889",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  },
  test: {
    database: "books_test",
    username: "root",
    password: "root",
    host: "127.0.0.1",
    dialect: "mysql",
    dialectModule: require("mysql2"),
    port: "8889",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  },
  production: {
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
    dialectModule: require("mysql2"),
    port: "8889",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
};

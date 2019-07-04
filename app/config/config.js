require("dotenv").config();

module.exports = {
  // If using onine database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },
  development: {
    username: "root",
    password: "root",
    database: "db_example",
    host: "127.0.0.1",
    port: "8889",
    dialect: "mysql",
    dialectModule: require("mysql2"),
    operatorsAliases: false,
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
    username: "root",
    password: "root",
    database: "db_example_test",
    host: "127.0.0.1",
    port: "8889",
    dialect: "mysql",
    dialectModule: require("mysql2"),
    operatorsAliases: false,
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
    port: process.env.DATABASE_PORT,
    dialectModule: require("mysql2"),
    operatorsAliases: false,
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

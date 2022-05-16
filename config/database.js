/**
 * @file Manages database connection configuration.
 * @author Fikri Rahmat Nurhidayat
 */

 require('dotenv').config()
/** Destruct environment variable to get database configuration */
const { DB_USERNAME = "postgres", DB_PASSWORD = "1234554321", DB_HOST = "localhost", DB_NAME = "binar123" } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}_development`,
    host: DB_HOST,
    dialect: "postgres",
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    dialect: "postgres",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}_production`,
    host: DB_HOST,
    dialect: "postgres",
  },
};

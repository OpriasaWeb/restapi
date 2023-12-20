// Database connection - mysql using xampp
const mysql = require("mysql"); // 'createPool' is declared but its value is never read.

const pool = mysql.createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  connectionLimit: 10
});

module.exports = pool;


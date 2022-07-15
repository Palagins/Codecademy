const { Pool } = require('pg');
require('dotenv').config({ path: '../.env' });

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const host = process.env.DB_HOST;
const database = process.env.DB_DATABASE;

console.log(`Connected to database ${database} on ${host}`);
module.exports = pool;

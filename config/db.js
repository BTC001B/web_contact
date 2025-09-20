require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,       // database name
  process.env.DB_USER,       // username
  process.env.DB_PASSWORD,   // password
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false, // set true to see SQL queries
    dialectOptions: {
      ssl: false, // since you’re connecting to localhost
    },
  }
);

sequelize.authenticate()
  .then(() => console.log('✅ PostgreSQL connected'))
  .catch(err => console.error('❌ DB connection failed:', err.message));

module.exports = sequelize;

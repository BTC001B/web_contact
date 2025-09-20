require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: false, // true only if remote with SSL (e.g. Render, Heroku)
  },
});

sequelize.authenticate()
  .then(() => console.log('✅ PostgreSQL connected'))
  .catch(err => console.error('❌ DB connection failed:', err.message));

module.exports = sequelize;

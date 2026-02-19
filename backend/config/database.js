// backend/config/database.js
const { Sequelize } = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.DATABASE_URL) {
  // ✅ Production / Render
  const dbUrl = process.env.DATABASE_URL.replace(
    /^postgresql:\/\//,
    "postgres://",
  ); // assure postgres://

  sequelize = new Sequelize(dbUrl, {
    dialect: "postgres",
    protocol: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Render SSL
      },
    },
  });
} else {
  // ✅ Cas local
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: "postgres",
      logging: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    },
  );
}

// Tester la connexion
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connexion à la base de données réussie !");
  } catch (error) {
    console.error("❌ Erreur de connexion à la base de données :", error);
  }
};

testConnection();

module.exports = sequelize;

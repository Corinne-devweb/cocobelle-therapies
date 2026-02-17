// backend/models/index.js
const sequelize = require("../config/database");
const User = require("./User");
const Appointment = require("./Appointment");

// Définir les relations
User.hasMany(Appointment, {
  foreignKey: "userId",
  as: "appointments",
  onDelete: "CASCADE",
});

Appointment.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

// Synchroniser les modèles avec la base de données
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("✅ Tables créées/mises à jour avec succès !");
  } catch (error) {
    console.error("❌ Erreur lors de la synchronisation:", error);
  }
};

module.exports = {
  sequelize,
  User,
  Appointment,
  syncDatabase,
};

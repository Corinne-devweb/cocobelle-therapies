// backend/server.js
require("dotenv").config(); // ← EN PREMIER !
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const { syncDatabase } = require("./models");
const authRoutes = require("./routes/auth");
const appointmentsRoutes = require("./routes/appointments");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

// ===== SÉCURITÉ : HELMET =====
// Protège les headers HTTP
app.use(helmet());

// ===== SÉCURITÉ : RATE LIMITING GÉNÉRAL =====
// Max 100 requêtes par IP toutes les 15 minutes
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: {
    success: false,
    message: "Trop de requêtes, veuillez réessayer dans 15 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// ===== SÉCURITÉ : RATE LIMITING CONNEXION =====
// Max 5 tentatives de connexion par IP toutes les 15 minutes
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: {
    success: false,
    message:
      "Trop de tentatives de connexion, veuillez réessayer dans 15 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// ===== SÉCURITÉ : RATE LIMITING CONTACT =====
// Max 10 messages de contact par IP toutes les heures
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 heure
  max: 10,
  message: {
    success: false,
    message: "Trop de messages envoyés, veuillez réessayer dans une heure.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// ===== MIDDLEWARES =====
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Appliquer le rate limiting général sur toutes les routes API
app.use("/api/", generalLimiter);

// ===== ROUTES =====
app.use("/api/auth/login", loginLimiter); // Rate limit strict sur la connexion
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentsRoutes);
app.use("/api/contact", contactLimiter, contactRoutes); // Rate limit sur le contact

// Route de test
app.get("/", (req, res) => {
  res.json({ message: "✅ API Coco Belle Therapies fonctionne !" });
});

// ===== DÉMARRAGE DU SERVEUR =====
const startServer = async () => {
  try {
    // Synchroniser la base de données
    await syncDatabase();

    // Démarrer le serveur
    app.listen(PORT, () => {
      console.log("=========================================");
      console.log(`🚀 Serveur démarré sur le port ${PORT}`);
      console.log(`📍 URL: http://localhost:${PORT}`);
      console.log(`🛡️  Helmet activé`);
      console.log(`🔒 Rate Limiting activé`);
      console.log("=========================================");
    });
  } catch (error) {
    console.error("❌ Erreur au démarrage:", error);
    process.exit(1);
  }
};

startServer();

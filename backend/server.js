// backend/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const { syncDatabase } = require("./models");
const authRoutes = require("./routes/auth");
const appointmentsRoutes = require("./routes/appointments");
const contactRoutes = require("./routes/contact");
const webhookRoutes = require("./routes/webhook");

const app = express();
const PORT = process.env.PORT || 5000;

// Configuration proxy
app.set("trust proxy", 1);

// Sécurité : Helmet
app.use(helmet());

// Rate limiting général (100 requêtes par 15 minutes)
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: "Trop de requêtes, veuillez réessayer dans 15 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Rate limiting connexion (5 tentatives par 15 minutes)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message:
      "Trop de tentatives de connexion, veuillez réessayer dans 15 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Rate limiting contact (10 messages par heure)
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    message: "Trop de messages envoyés, veuillez réessayer dans une heure.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Appliquer le rate limiting général
app.use("/api/", generalLimiter);

// Routes
app.use("/api/auth/login", loginLimiter);
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentsRoutes);
app.use("/api/contact", contactLimiter, contactRoutes);
app.use("/api/webhook", webhookRoutes);

// Route de test
app.get("/", (req, res) => {
  res.json({ message: "API Coco Belle Therapies fonctionne" });
});

// Démarrage du serveur
const startServer = async () => {
  try {
    // Synchroniser la base de données
    await syncDatabase();

    // Démarrer le serveur
    app.listen(PORT, () => {
      console.log("=========================================");
      console.log(`Serveur démarré sur le port ${PORT}`);
      console.log(`URL: http://localhost:${PORT}`);
      console.log(`Helmet activé`);
      console.log(`Rate Limiting activé`);
      console.log("=========================================");
    });
  } catch (error) {
    console.error("Erreur au démarrage:", error);
    process.exit(1);
  }
};

startServer();

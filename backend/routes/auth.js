// backend/routes/auth.js
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const authMiddleware = require("../middleware/auth");
const { validateRegister, validateLogin } = require("../middleware/validation");

// ===== INSCRIPTION =====
router.post("/register", validateRegister, async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Cet email est déjà utilisé" });
    }

    // Créer l'utilisateur (le mot de passe sera hashé automatiquement)
    const user = await User.create({
      name,
      email,
      password,
      phone,
    });

    // Créer le token JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({
      message: "Inscription réussie",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error("Erreur inscription:", error);
    res.status(500).json({ message: "Erreur lors de l'inscription" });
  }
});

// ===== CONNEXION =====
router.post("/login", validateLogin, async (req, res) => {
  try {
    const { email, password } = req.body;

    // Trouver l'utilisateur
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Email ou mot de passe incorrect" });
    }

    // Vérifier le mot de passe
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Email ou mot de passe incorrect" });
    }

    // Créer le token JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      message: "Connexion réussie",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error("Erreur connexion:", error);
    res.status(500).json({ message: "Erreur lors de la connexion" });
  }
});

// ===== RÉCUPÉRER L'UTILISATEUR CONNECTÉ =====
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findByPk(req.userId, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    res.json({ user });
  } catch (error) {
    console.error("Erreur récupération utilisateur:", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;

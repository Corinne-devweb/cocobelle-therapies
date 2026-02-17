// backend/routes/appointments.js
const express = require("express");
const router = express.Router();
const { Appointment, User } = require("../models");
const authMiddleware = require("../middleware/auth");

// Toutes les routes nécessitent une authentification
router.use(authMiddleware);

// ===== CRÉER UN RENDEZ-VOUS =====
router.post("/", async (req, res) => {
  try {
    const { serviceType, appointmentDate, appointmentTime, duration, notes } =
      req.body;

    const appointment = await Appointment.create({
      userId: req.userId,
      serviceType,
      appointmentDate,
      appointmentTime,
      duration,
      notes,
      status: "pending",
    });

    res.status(201).json({
      message: "Rendez-vous créé avec succès",
      appointment,
    });
  } catch (error) {
    console.error("Erreur création RDV:", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la création du rendez-vous" });
  }
});

// ===== RÉCUPÉRER TOUS LES RDV DE L'UTILISATEUR =====
router.get("/user", async (req, res) => {
  try {
    const appointments = await Appointment.findAll({
      where: { userId: req.userId },
      order: [
        ["appointmentDate", "DESC"],
        ["appointmentTime", "DESC"],
      ],
    });

    // Séparer les RDV passés et à venir
    const today = new Date().toISOString().split("T")[0];
    const upcoming = appointments.filter((apt) => apt.appointmentDate >= today);
    const past = appointments.filter((apt) => apt.appointmentDate < today);

    res.json({
      upcoming,
      past,
      total: appointments.length,
    });
  } catch (error) {
    console.error("Erreur récupération RDV:", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des rendez-vous" });
  }
});

// ===== RÉCUPÉRER UN RDV SPÉCIFIQUE =====
router.get("/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findOne({
      where: {
        id: req.params.id,
        userId: req.userId,
      },
    });

    if (!appointment) {
      return res.status(404).json({ message: "Rendez-vous non trouvé" });
    }

    res.json({ appointment });
  } catch (error) {
    console.error("Erreur récupération RDV:", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// ===== MODIFIER UN RDV =====
router.put("/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findOne({
      where: {
        id: req.params.id,
        userId: req.userId,
      },
    });

    if (!appointment) {
      return res.status(404).json({ message: "Rendez-vous non trouvé" });
    }

    // Mettre à jour
    await appointment.update(req.body);

    res.json({
      message: "Rendez-vous modifié avec succès",
      appointment,
    });
  } catch (error) {
    console.error("Erreur modification RDV:", error);
    res.status(500).json({ message: "Erreur lors de la modification" });
  }
});

// ===== ANNULER UN RDV =====
router.delete("/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findOne({
      where: {
        id: req.params.id,
        userId: req.userId,
      },
    });

    if (!appointment) {
      return res.status(404).json({ message: "Rendez-vous non trouvé" });
    }

    // Marquer comme annulé au lieu de supprimer
    await appointment.update({ status: "cancelled" });

    res.json({
      message: "Rendez-vous annulé avec succès",
      appointment,
    });
  } catch (error) {
    console.error("Erreur annulation RDV:", error);
    res.status(500).json({ message: "Erreur lors de l'annulation" });
  }
});

module.exports = router;

// backend/routes/appointments.js
const express = require("express");
const router = express.Router();
const { Appointment } = require("../models");
const authMiddleware = require("../middleware/auth");
const { validateAppointment } = require("../middleware/validation");

// Toutes les routes nécessitent une authentification
router.use(authMiddleware);

// ===== CRÉER UN RENDEZ-VOUS =====
router.post("/", validateAppointment, async (req, res) => {
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
      success: true,
      message: "Rendez-vous créé avec succès",
      appointment,
    });
  } catch (error) {
    console.error("Erreur création RDV:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de la création du rendez-vous",
    });
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
      success: true,
      upcoming,
      past,
      total: appointments.length,
    });
  } catch (error) {
    console.error("Erreur récupération RDV:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de la récupération des rendez-vous",
    });
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
      return res.status(404).json({
        success: false,
        message: "Rendez-vous non trouvé",
      });
    }

    res.json({
      success: true,
      appointment,
    });
  } catch (error) {
    console.error("Erreur récupération RDV:", error);
    res.status(500).json({
      success: false,
      message: "Erreur serveur",
    });
  }
});

// ===== MODIFIER UN RDV =====
router.put("/:id", validateAppointment, async (req, res) => {
  try {
    const appointment = await Appointment.findOne({
      where: {
        id: req.params.id,
        userId: req.userId,
      },
    });

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Rendez-vous non trouvé",
      });
    }

    await appointment.update(req.body);

    res.json({
      success: true,
      message: "Rendez-vous modifié avec succès",
      appointment,
    });
  } catch (error) {
    console.error("Erreur modification RDV:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de la modification",
    });
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
      return res.status(404).json({
        success: false,
        message: "Rendez-vous non trouvé",
      });
    }

    // Marquer comme annulé au lieu de supprimer
    await appointment.update({ status: "cancelled" });

    res.json({
      success: true,
      message: "Rendez-vous annulé avec succès",
      appointment,
    });
  } catch (error) {
    console.error("Erreur annulation RDV:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de l'annulation",
    });
  }
});

module.exports = router;

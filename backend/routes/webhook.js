// backend/routes/webhook.js
const express = require("express");
const router = express.Router();
const { Appointment } = require("../models");
const { User } = require("../models");

// Webhook Cal.com
// Reçoit les événements de Cal.com et enregistre les RDV dans la base de données

router.post("/cal", async (req, res) => {
  try {
    console.log("Webhook Cal.com reçu:", req.body);

    const { triggerEvent, payload } = req.body;

    // Traitement des événements de réservation seulement
    if (triggerEvent === "BOOKING_CREATED") {
      const { attendees, startTime, endTime, title, description, metadata } =
        payload;

      // Récupérer l'email du client
      const clientEmail = attendees[0]?.email;
      const clientName = attendees[0]?.name;

      if (!clientEmail) {
        console.error("Email du client manquant");
        return res.status(400).json({ error: "Email manquant" });
      }

      // Trouver l'utilisateur par email
      const user = await User.findOne({ where: { email: clientEmail } });

      if (!user) {
        console.log("Utilisateur non trouvé, RDV non enregistré");
        // On renvoie quand même 200 pour ne pas bloquer Cal.com
        return res.status(200).json({
          message: "RDV reçu mais utilisateur non trouvé",
        });
      }

      // Extraire la date et l'heure
      const appointmentDate = new Date(startTime);
      const appointmentTime = appointmentDate.toTimeString().slice(0, 8); // HH:MM:SS

      // Calculer la durée en minutes
      const duration = Math.round(
        (new Date(endTime) - new Date(startTime)) / 60000,
      );

      // Déterminer le type de service depuis le titre ou le type Cal.com
      let serviceType = "Consultation gratuite";

      const titleLower = (title || "").toLowerCase();
      const typeLower = (payload.type || "").toLowerCase();

      if (titleLower.includes("hypno") || typeLower.includes("hypno")) {
        serviceType = "Hypnose";
      } else if (titleLower.includes("tdah") || typeLower.includes("tdah")) {
        serviceType = "TDAH";
      } else if (
        titleLower.includes("consultation") ||
        typeLower.includes("consultation")
      ) {
        serviceType = "Consultation gratuite";
      }

      // Créer le RDV dans la base de données
      const appointment = await Appointment.create({
        userId: user.id,
        serviceType: serviceType,
        appointmentDate: appointmentDate,
        appointmentTime: appointmentTime,
        duration: duration,
        notes: description || "",
        status: "confirmed",
      });

      console.log("RDV enregistré:", appointment.id);

      return res.status(200).json({
        success: true,
        message: "RDV enregistré avec succès",
        appointmentId: appointment.id,
      });
    }

    // Pour les autres événements, on renvoie juste 200
    return res.status(200).json({ message: "Événement reçu" });
  } catch (error) {
    console.error("Erreur webhook Cal.com:", error);
    // On renvoie 200 quand même pour ne pas bloquer Cal.com
    return res.status(200).json({ error: error.message });
  }
});

module.exports = router;

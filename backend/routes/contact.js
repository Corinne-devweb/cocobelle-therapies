// backend/routes/contact.js
const express = require("express");
const router = express.Router();
const { sendContactEmail } = require("../config/email");
const { validateContact } = require("../middleware/validation");

// Envoyer un message de contact
router.post("/", validateContact, async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Envoyer les emails (notification + confirmation)
    await sendContactEmail({ name, email, phone, subject, message });

    res.status(200).json({
      success: true,
      message: "Message envoyé avec succès ! Nous vous répondrons rapidement.",
    });
  } catch (error) {
    console.error("Erreur envoi message:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de l'envoi du message",
      error: error.message,
    });
  }
});

module.exports = router;

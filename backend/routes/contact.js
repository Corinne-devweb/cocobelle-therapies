// backend/routes/contact.js
const express = require("express");
const router = express.Router();
const {
  sendContactNotification,
  sendConfirmationEmail,
} = require("../config/email");

// ===== ENVOYER UN MESSAGE DE CONTACT =====
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Nom, email et message sont obligatoires",
      });
    }

    // Envoyer email de notification à votre cliente
    await sendContactNotification({ name, email, phone, subject, message });

    // Envoyer email de confirmation au visiteur
    await sendConfirmationEmail({ name, email });

    res.status(200).json({
      success: true,
      message: "Message envoyé avec succès ! Nous vous répondrons rapidement.",
    });
  } catch (error) {
    console.error("❌ Erreur envoi message:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de l'envoi du message",
      error: error.message,
    });
  }
});

module.exports = router;

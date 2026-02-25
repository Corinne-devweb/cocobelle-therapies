// backend/config/email.js
const { Resend } = require("resend");
require("dotenv").config();

// Initialiser Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Envoyer un email via Resend
const sendEmail = async ({ to, subject, html, from }) => {
  try {
    const fromEmail =
      from ||
      process.env.EMAIL_FROM ||
      "Coco Belle Therapies <onboarding@resend.dev>";

    console.log("Envoi email via Resend...");
    console.log("Destinataire:", to);
    console.log("Sujet:", subject);

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [to],
      subject: subject,
      html: html,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      throw new Error(error.message || "Erreur lors de l'envoi de l'email");
    }

    console.log("Email envoyé avec succès via Resend");
    console.log("ID:", data.id);

    return { success: true, messageId: data.id };
  } catch (error) {
    console.error("Erreur sendEmail:", error);
    throw error;
  }
};

// Envoyer un email de confirmation de rendez-vous
const sendAppointmentConfirmation = async (userEmail, appointmentDetails) => {
  const { serviceType, appointmentDate, appointmentTime, duration } =
    appointmentDetails;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #2A7A73; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .details { background-color: white; padding: 15px; border-left: 4px solid #2A7A73; margin: 20px 0; }
        .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
        .button { display: inline-block; padding: 12px 24px; background-color: #2A7A73; color: white; text-decoration: none; border-radius: 4px; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Rendez-vous confirmé</h1>
        </div>
        <div class="content">
          <p>Bonjour,</p>
          <p>Votre rendez-vous a été confirmé avec succès !</p>
          
          <div class="details">
            <h3>Détails du rendez-vous</h3>
            <p><strong>Service :</strong> ${serviceType}</p>
            <p><strong>Date :</strong> ${new Date(
              appointmentDate,
            ).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}</p>
            <p><strong>Heure :</strong> ${appointmentTime}</p>
            <p><strong>Durée :</strong> ${duration} minutes</p>
          </div>

          <p><strong>Paiement :</strong> Le paiement doit être effectué par virement bancaire au plus tard 24h avant la session.</p>
          
          <p><strong>Un lien Google Meet vous sera envoyé 24h avant le rendez-vous.</strong></p>

          <p>Si vous avez des questions, n'hésitez pas à me contacter :</p>
          <ul>
            <li>Email : info@cocobelletherapies.com</li>
            <li>WhatsApp : +44 7801 766737</li>
          </ul>

          <p>À bientôt,<br>Belle - Coco Belle Therapies</p>
        </div>
        <div class="footer">
          <p>Coco Belle Therapies<br>
          GUJAN-MESTRAS (33)<br>
          <a href="https://cocobelle-therapies.vercel.app">cocobelle-therapies.vercel.app</a></p>
        </div>
      </div>
    </body>
    </html>
  `;

  return sendEmail({
    to: userEmail,
    subject: "Confirmation de rendez-vous - Coco Belle Therapies",
    html,
  });
};

// Envoyer un email de contact
const sendContactEmail = async (contactData) => {
  const { name, email, phone, subject, message } = contactData;

  // Email à l'administrateur
  const adminHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #2A7A73; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .details { background-color: white; padding: 15px; border-left: 4px solid #2A7A73; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Nouveau message de contact</h1>
        </div>
        <div class="content">
          <div class="details">
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
            <p><strong>Sujet :</strong> ${subject}</p>
            <p><strong>Message :</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  // Email de confirmation à l'utilisateur
  const userHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #2A7A73; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Message reçu</h1>
        </div>
        <div class="content">
          <p>Bonjour ${name},</p>
          <p>Merci pour votre message ! Je vous répondrai dans les 24-48 heures.</p>
          <p>À bientôt,<br>Belle - Coco Belle Therapies</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Envoyer les deux emails
  await sendEmail({
    to: process.env.EMAIL_TO || "info@cocobelletherapies.com",
    subject: `Nouveau message : ${subject}`,
    html: adminHtml,
  });

  await sendEmail({
    to: email,
    subject: "Message reçu - Coco Belle Therapies",
    html: userHtml,
  });

  return { success: true };
};

// Envoyer un email de bienvenue
const sendWelcomeEmail = async (userEmail, userName) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #2A7A73; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .button { display: inline-block; padding: 12px 24px; background-color: #2A7A73; color: white; text-decoration: none; border-radius: 4px; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Bienvenue !</h1>
        </div>
        <div class="content">
          <p>Bonjour ${userName},</p>
          <p>Merci d'avoir créé votre compte sur Coco Belle Therapies !</p>
          
          <p>Vous pouvez maintenant :</p>
          <ul>
            <li>Réserver vos rendez-vous</li>
            <li>Gérer votre compte</li>
            <li>Me contacter facilement</li>
          </ul>

          <p style="text-align: center;">
            <a href="https://cocobelle-therapies.vercel.app/rendez-vous" class="button">Prendre rendez-vous</a>
          </p>

          <p><strong>Consultation gratuite de 20 minutes disponible !</strong></p>

          <p>À bientôt,<br>Belle - Coco Belle Therapies</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return sendEmail({
    to: userEmail,
    subject: "Bienvenue sur Coco Belle Therapies !",
    html,
  });
};

module.exports = {
  sendEmail,
  sendAppointmentConfirmation,
  sendContactEmail,
  sendWelcomeEmail,
};

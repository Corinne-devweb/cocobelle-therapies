// backend/config/email.js
const nodemailer = require("nodemailer");
require("dotenv").config();

// Configuration du transporteur email
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true pour le port 465, false pour les autres ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Vérifier la connexion
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Erreur configuration email:", error);
  } else {
    console.log("✅ Service email configuré avec succès !");
  }
});

// ===== EMAIL DE NOTIFICATION À VOTRE CLIENTE =====
const sendContactNotification = async (contactData) => {
  const { name, email, phone, subject, message } = contactData;

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `📧 Nouveau message de contact : ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        
        <div style="background-color: #2A7A73; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Coco Belle Therapies</h1>
          <p style="color: white; opacity: 0.9; margin: 5px 0 0 0;">Nouveau message de contact</p>
        </div>

        <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ""}
          <p><strong>Sujet :</strong> ${subject}</p>
        </div>

        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #2A7A73;">
          <h3 style="color: #2A7A73; margin-top: 0;">Message :</h3>
          <p style="white-space: pre-wrap; line-height: 1.8;">${message}</p>
        </div>

        <div style="margin-top: 20px; text-align: center;">
          <a href="mailto:${email}" 
             style="background-color: #2A7A73; color: white; padding: 12px 24px; 
             text-decoration: none; border-radius: 4px; display: inline-block;">
            Répondre à ${name}
          </a>
        </div>

        <div style="padding: 20px; text-align: center; color: #777; font-size: 12px; margin-top: 20px;">
          <p>Coco Belle Therapies - info@cocobelletherapies.com</p>
          <p>+33 7 45 15 52 80</p>
        </div>

      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email de notification envoyé à votre cliente");
    return true;
  } catch (error) {
    console.error("❌ Erreur envoi email notification:", error);
    return false;
  }
};

// ===== EMAIL DE CONFIRMATION AU VISITEUR =====
const sendConfirmationEmail = async ({ name, email }) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "✅ Message bien reçu - Coco Belle Therapies",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">

        <div style="background-color: #2A7A73; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Coco Belle Therapies</h1>
        </div>

        <div style="padding: 30px; background-color: #f9f9f9;">
          <h2 style="color: #2A7A73;">Bonjour ${name} !</h2>
          
          <p style="line-height: 1.8;">
            Merci pour votre message ! Je l'ai bien reçu et je vous répondrai 
            dans les plus brefs délais.
          </p>

          <p style="line-height: 1.8;">
            En attendant, n'hésitez pas à consulter mon site pour en savoir 
            plus sur mes services.
          </p>

          <div style="margin-top: 20px; padding: 20px; background-color: white; 
               border-radius: 8px; border-left: 4px solid #2A7A73;">
            <p style="margin: 0; color: #555;">
              💆 Hypnothérapie clinique<br/>
              🧠 Accompagnement TDAH<br/>
              🎁 Consultation gratuite de 20 minutes
            </p>
          </div>

          <div style="margin-top: 30px; text-align: center;">
            <a href="https://cocobelletherapies.com" 
               style="background-color: #2A7A73; color: white; padding: 12px 24px; 
               text-decoration: none; border-radius: 4px; display: inline-block;">
              Visiter le site
            </a>
          </div>
        </div>

        <div style="padding: 20px; text-align: center; color: #777; font-size: 12px;">
          <p>Coco Belle Therapies - info@cocobelletherapies.com</p>
          <p>+33 7 45 15 52 80</p>
        </div>

      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email de confirmation envoyé au visiteur");
    return true;
  } catch (error) {
    console.error("❌ Erreur envoi email confirmation:", error);
    return false;
  }
};

module.exports = { sendContactNotification, sendConfirmationEmail };

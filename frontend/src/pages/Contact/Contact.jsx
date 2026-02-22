// src/pages/Contact/Contact.jsx
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { contactAPI } from "../../services/api";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  // Validation du formulaire
  const validateForm = () => {
    const newErrors = {};

    // Prénom
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis";
    }

    // Nom
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email invalide";
    }

    // Téléphone (optionnel mais validé si rempli)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\d\s\+\-\(\)]+$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "Numéro de téléphone invalide";
      }
    }

    // Sujet
    if (!formData.subject.trim()) {
      newErrors.subject = "Le sujet est requis";
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }

    // Consentement
    if (!formData.consent) {
      newErrors.consent = "Vous devez accepter la politique de confidentialité";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Gestion des changements de champs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Supprimer l'erreur du champ quand l'utilisateur commence à taper
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Appel à l'API backend
      const response = await contactAPI.sendMessage({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });

      console.log("✅ Message envoyé:", response.data);

      // Succès
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        consent: false,
      });

      // Faire défiler vers le haut pour voir le message de succès
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("❌ Erreur envoi message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      <Helmet>
        <title>Contact | Coco Belle Therapies</title>
        <meta
          name="description"
          content="Contactez Coco Belle Therapies par email, WhatsApp ou formulaire de contact. Réponse sous 24-48h. Consultation gratuite de 20 minutes disponible."
        />
        <meta
          name="keywords"
          content="contact, email, WhatsApp, formulaire contact, consultation gratuite"
        />
        <meta property="og:title" content="Contact | Coco Belle Therapies" />
        <meta
          property="og:description"
          content="Contactez Coco Belle Therapies. Réponse sous 24-48h. Consultation gratuite disponible."
        />
        <link
          rel="canonical"
          href="https://cocobelle-therapies.vercel.app/contact"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero__overlay"></div>
        <div className="container">
          <div className="contact-hero__content">
            <h1 className="contact-hero__title">Contactez-moi</h1>
            <p className="contact-hero__subtitle">
              Je suis là pour répondre à vos questions et vous accompagner
            </p>
          </div>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="contact-info-section">
        <div className="container">
          <h2 className="section-title text-center">Restons en contact</h2>
          <div className="contact-methods">
            {/* Email */}
            <div className="contact-method">
              <div className="contact-method__icon">📧</div>
              <h3 className="contact-method__title">Email</h3>

              <a
                href="mailto:info@cocobelletherapies.com"
                className="contact-method__link"
              >
                info@cocobelletherapies.com
              </a>
              <p className="contact-method__text">
                Réponse sous 24-48h en semaine
              </p>
            </div>

            {/* WhatsApp */}
            <div className="contact-method">
              <div className="contact-method__icon">📱</div>
              <h3 className="contact-method__title">WhatsApp</h3>

              <a
                href="https://wa.me/447801766737"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method__link"
              >
                +44 7801 766737
              </a>
              <p className="contact-method__text">Réponse rapide par message</p>
            </div>

            {/* Consultation gratuite */}
            <div className="contact-method">
              <div className="contact-method__icon">🎁</div>
              <h3 className="contact-method__title">Consultation gratuite</h3>
              <p className="contact-method__link">20 minutes offertes</p>
              <p className="contact-method__text">
                Pour faire connaissance et discuter de vos besoins
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2 className="form-header__title">Envoyez-moi un message</h2>
              <p className="form-header__subtitle">
                Remplissez le formulaire ci-dessous et je vous répondrai dans
                les plus brefs délais
              </p>
            </div>

            {/* Messages de statut */}
            {submitStatus === "success" && (
              <div className="alert alert--success">
                <span className="alert__icon">✓</span>
                <div>
                  <strong>Message envoyé avec succès !</strong>
                  <p>
                    Je vous répondrai dans les 24-48 heures. Merci pour votre
                    message.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="alert alert--error">
                <span className="alert__icon">✕</span>
                <div>
                  <strong>Erreur lors de l'envoi</strong>
                  <p>
                    Une erreur s'est produite. Veuillez réessayer ou me
                    contacter directement par email.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              {/* Prénom et Nom */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    Prénom <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`form-input ${
                      errors.firstName ? "form-input--error" : ""
                    }`}
                    placeholder="Votre prénom"
                  />
                  {errors.firstName && (
                    <span className="form-error">{errors.firstName}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">
                    Nom <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`form-input ${
                      errors.lastName ? "form-input--error" : ""
                    }`}
                    placeholder="Votre nom"
                  />
                  {errors.lastName && (
                    <span className="form-error">{errors.lastName}</span>
                  )}
                </div>
              </div>

              {/* Email et Téléphone */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${
                      errors.email ? "form-input--error" : ""
                    }`}
                    placeholder="votre.email@exemple.com"
                  />
                  {errors.email && (
                    <span className="form-error">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Téléphone <span className="optional">(optionnel)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-input ${
                      errors.phone ? "form-input--error" : ""
                    }`}
                    placeholder="+33 6 12 34 56 78"
                  />
                  {errors.phone && (
                    <span className="form-error">{errors.phone}</span>
                  )}
                </div>
              </div>

              {/* Sujet */}
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Sujet <span className="required">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`form-select ${
                    errors.subject ? "form-input--error" : ""
                  }`}
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="consultation">
                    Demande de consultation gratuite
                  </option>
                  <option value="adhd">Accompagnement TDAH</option>
                  <option value="hypnotherapy">Hypnose thérapeutique</option>
                  <option value="pricing">Questions sur les tarifs</option>
                  <option value="other">Autre question</option>
                </select>
                {errors.subject && (
                  <span className="form-error">{errors.subject}</span>
                )}
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-textarea ${
                    errors.message ? "form-input--error" : ""
                  }`}
                  placeholder="Décrivez brièvement votre situation et vos besoins..."
                  rows="6"
                ></textarea>
                {errors.message && (
                  <span className="form-error">{errors.message}</span>
                )}
                <span className="form-hint">Minimum 10 caractères</span>
              </div>

              {/* Consentement */}
              <div className="form-group">
                <label className="form-checkbox">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="form-checkbox__input"
                  />
                  <span className="form-checkbox__label">
                    J'accepte que mes données soient utilisées pour me
                    recontacter. Consultez la{" "}
                    <a
                      href="/politique-confidentialite"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      politique de confidentialité
                    </a>
                    . <span className="required">*</span>
                  </span>
                </label>
                {errors.consent && (
                  <span className="form-error">{errors.consent}</span>
                )}
              </div>

              {/* Bouton de soumission */}
              <div className="form-actions">
                <button
                  type="submit"
                  className="btn btn--primary btn--large"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer le message"
                  )}
                </button>
              </div>

              <p className="form-footer-note">
                <span className="required">*</span> Champs obligatoires
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="contact-faq">
        <div className="container">
          <h2 className="section-title text-center">Questions fréquentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-item__question">
                ⏱️ Quel est le délai de réponse ?
              </h3>
              <p className="faq-item__answer">
                Je réponds généralement sous 24-48 heures en semaine. Pour une
                réponse plus rapide, contactez-moi via WhatsApp.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-item__question">
                🎁 La consultation est-elle vraiment gratuite ?
              </h3>
              <p className="faq-item__answer">
                Oui ! La première consultation de 20 minutes est offerte et sans
                engagement. C'est l'occasion de faire connaissance et de
                discuter de vos besoins.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-item__question">
                🌍 Proposez-vous des sessions en ligne ?
              </h3>
              <p className="faq-item__answer">
                Oui, toutes mes sessions se font en ligne par visioconférence,
                ce qui vous permet de bénéficier d'un accompagnement depuis chez
                vous, où que vous soyez.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-item__question">💰 Quels sont vos tarifs ?</h3>
              <p className="faq-item__answer">
                Une session de 50 minutes coûte £50 / €57 / $67. Des tarifs
                réduits sont disponibles pour les étudiants et personnes en
                difficulté financière.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

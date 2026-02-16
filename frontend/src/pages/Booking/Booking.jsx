// src/pages/Booking/Booking.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Booking.scss";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [bookingComplete, setBookingComplete] = useState(false);

  const services = [
    {
      id: "adhd",
      name: "Accompagnement TDAH (ACT)",
      price: "£50 | €57 | $67",
      duration: "50 minutes",
      icon: "🧠",
      description:
        "Thérapie d'Acceptation et d'Engagement pour adultes avec TDAH",
      calendlyUrl: "https://calendly.com/cocobelle/consultation",
    },
    {
      id: "hypnotherapy",
      name: "Hypnothérapie Clinique",
      price: "£60 | €68 | $80",
      duration: "50 minutes",
      icon: "🌀",
      description: "Hypnothérapie basée sur la mindfulness",
      calendlyUrl: "https://calendly.com/cocobelle/consultation",
    },
    {
      id: "consultation",
      name: "Consultation gratuite",
      price: "Gratuit",
      duration: "20 minutes",
      icon: "🎁",
      description:
        "Discussion gratuite pour faire connaissance et comprendre vos besoins",
      calendlyUrl: "https://calendly.com/cocobelle/consultation",
    },
  ];

  const sessionTypes = [
    { id: "online", name: "Session en ligne (Google Meet)", icon: "💻" },
  ];

  useEffect(() => {
    if (step === 2) {
      // Charger le script Calendly
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      // Écouter l'événement de réservation Calendly
      const handleCalendlyEvent = (e) => {
        if (e.data.event && e.data.event === "calendly.event_scheduled") {
          // Réservation confirmée, passer à l'étape 3
          setBookingComplete(true);
          setStep(3);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      };

      window.addEventListener("message", handleCalendlyEvent);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
        window.removeEventListener("message", handleCalendlyEvent);
      };
    }
  }, [step]);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleNext = () => {
    if (step === 1 && selectedService) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="booking">
      {/* Hero Section */}
      <section className="booking-hero">
        <div className="booking-hero__overlay"></div>
        <div className="container">
          <div className="booking-hero__content">
            <h1 className="booking-hero__title">Prendre rendez-vous</h1>
            <p className="booking-hero__subtitle">
              Réservez votre session en quelques clics
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      {step < 3 && (
        <section className="booking-progress">
          <div className="container">
            <div className="progress-bar">
              <div
                className={`progress-step ${step >= 1 ? "active" : ""} ${
                  step > 1 ? "completed" : ""
                }`}
              >
                <div className="progress-step__number">1</div>
                <div className="progress-step__label">Service</div>
              </div>
              <div
                className={`progress-line ${step > 1 ? "active" : ""}`}
              ></div>
              <div
                className={`progress-step ${step >= 2 ? "active" : ""} ${
                  step > 2 ? "completed" : ""
                }`}
              >
                <div className="progress-step__number">2</div>
                <div className="progress-step__label">Date & Heure</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 1: Service Selection */}
      {step === 1 && (
        <section className="booking-step">
          <div className="container">
            <h2 className="step-title">Choisissez votre service</h2>
            <div className="services-grid">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`service-option ${
                    selectedService?.id === service.id ? "selected" : ""
                  }`}
                  onClick={() => handleServiceSelect(service)}
                >
                  <div className="service-option__icon">{service.icon}</div>
                  <h3 className="service-option__name">{service.name}</h3>
                  <p className="service-option__description">
                    {service.description}
                  </p>
                  <div className="service-option__details">
                    <span className="service-option__price">
                      {service.price}
                    </span>
                    <span className="service-option__duration">
                      ⏱️ {service.duration}
                    </span>
                  </div>
                  {selectedService?.id === service.id && (
                    <div className="service-option__checkmark">✓</div>
                  )}
                </div>
              ))}
            </div>

            <h2 className="step-title" style={{ marginTop: "3rem" }}>
              Type de session
            </h2>
            <div className="session-types-grid">
              {sessionTypes.map((type) => (
                <div key={type.id} className="session-type-option selected">
                  <span className="session-type-option__icon">{type.icon}</span>
                  <span className="session-type-option__name">{type.name}</span>
                  <span className="session-type-option__checkmark">✓</span>
                </div>
              ))}
            </div>

            <div className="step-actions">
              <button
                onClick={handleNext}
                className="btn btn--primary btn--large"
                disabled={!selectedService}
              >
                Suivant : Choisir une date
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Step 2: Calendly Widget */}
      {step === 2 && selectedService && (
        <section className="booking-step">
          <div className="container">
            <div className="booking-summary">
              <h3>Votre sélection</h3>
              <p>
                <strong>Service :</strong> {selectedService.name}
              </p>
              <p>
                <strong>Prix :</strong> {selectedService.price}
              </p>
              <p>
                <strong>Durée :</strong> {selectedService.duration}
              </p>
            </div>

            <h2 className="step-title">Choisissez votre date et heure</h2>

            <div className="calendly-widget-container">
              <div
                className="calendly-inline-widget"
                data-url={`${selectedService.calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=2A7A73&text_color=ffffff&primary_color=2A7A73`}
                style={{ minWidth: "320px", height: "700px" }}
              ></div>
            </div>

            <div className="step-actions">
              <button onClick={handleBack} className="btn btn--outline">
                Retour
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Step 3: Confirmation */}
      {step === 3 && bookingComplete && (
        <section className="booking-confirmation">
          <div className="container">
            <div className="confirmation-box">
              <div className="confirmation-icon">✓</div>
              <h2 className="confirmation-title">Rendez-vous confirmé !</h2>
              <p className="confirmation-text">
                Votre rendez-vous a été enregistré avec succès.
              </p>

              <div className="confirmation-details">
                <h3>Détails de votre rendez-vous</h3>
                <div className="detail-item">
                  <span className="detail-label">Service :</span>
                  <span className="detail-value">{selectedService?.name}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Prix :</span>
                  <span className="detail-value">{selectedService?.price}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Durée :</span>
                  <span className="detail-value">
                    {selectedService?.duration}
                  </span>
                </div>
              </div>

              <div className="confirmation-next-steps">
                <h3>Prochaines étapes</h3>
                <ul>
                  <li>
                    📧 Vous recevrez un email de confirmation avec tous les
                    détails
                  </li>
                  <li>
                    📅 Un lien Google Meet vous sera envoyé 24h avant le
                    rendez-vous
                  </li>
                  <li>
                    💳 Les instructions de paiement sont dans l'email de
                    confirmation
                  </li>
                  <li>
                    💬 N'hésitez pas à me contacter si vous avez des questions
                  </li>
                </ul>
              </div>

              <div className="confirmation-actions">
                <Link to="/" className="btn btn--primary btn--large">
                  Retour à l'accueil
                </Link>
                <Link to="/contact" className="btn btn--outline btn--large">
                  Me contacter
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Info Section */}
      {step < 3 && (
        <section className="booking-info">
          <div className="container">
            <div className="info-cards">
              <div className="info-card">
                <div className="info-card__icon">💳</div>
                <h3 className="info-card__title">Paiement</h3>
                <p className="info-card__text">
                  Le paiement s'effectue une fois le rendez-vous pris, par
                  virement bancaire uniquement, au plus tard 24h avant la
                  session
                </p>
              </div>
              <div className="info-card">
                <div className="info-card__icon">🔄</div>
                <h3 className="info-card__title">Annulation</h3>
                <p className="info-card__text">
                  Annulation gratuite jusqu'à 48h avant le rendez-vous
                </p>
              </div>
              <div className="info-card">
                <div className="info-card__icon">🔒</div>
                <h3 className="info-card__title">Confidentialité</h3>
                <p className="info-card__text">
                  Toutes les sessions sont strictement confidentielles
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Booking;

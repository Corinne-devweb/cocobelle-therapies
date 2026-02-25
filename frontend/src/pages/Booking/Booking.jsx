// src/pages/Booking/Booking.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Booking.scss";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: "adhd",
      name: "Accompagnement TDAH (ACT)",
      price: "£60 | €68 | $80",
      duration: "50 minutes",
      icon: "🧠",
      description:
        "Thérapie d'Acceptation et d'Engagement pour adultes avec TDAH",
      calUrl: "https://cal.eu/cocobelletherapies/accompagnement-tdah",
    },
    {
      id: "hypnotherapy",
      name: "Hypnothérapie Clinique",
      price: "£60 | €68 | $80",
      duration: "50 minutes",
      icon: "🌀",
      description: "Hypnothérapie basée sur la mindfulness",
      calUrl: "https://cal.eu/cocobelletherapies/hypnotherapie-clinique",
    },
    {
      id: "consultation",
      name: "Consultation gratuite",
      price: "Gratuit",
      duration: "20 minutes",
      icon: "🎁",
      description:
        "Discussion gratuite pour faire connaissance et comprendre vos besoins",
      calUrl: "https://cal.eu/cocobelletherapies/consultation-gratuite",
    },
  ];

  const sessionTypes = [
    { id: "online", name: "Session en ligne (Google Meet)", icon: "💻" },
  ];

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
      <Helmet>
        <title>Prendre Rendez-vous | Coco Belle Therapies</title>
        <meta
          name="description"
          content="Réservez votre consultation gratuite de 20 minutes ou prenez rendez-vous pour une session d'hypnothérapie ou d'accompagnement TDAH en ligne."
        />
        <meta
          name="keywords"
          content="rendez-vous, consultation gratuite, réservation, hypnothérapie, TDAH, en ligne"
        />
        <meta
          property="og:title"
          content="Prendre Rendez-vous | Coco Belle Therapies"
        />
        <meta
          property="og:description"
          content="Réservez votre consultation gratuite de 20 minutes ou prenez rendez-vous en ligne."
        />
        <link
          rel="canonical"
          href="https://cocobelle-therapies.vercel.app/rendez-vous"
        />
      </Helmet>

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
            <div className={`progress-line ${step > 1 ? "active" : ""}`}></div>
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

      {/* Step 2: Cal.com Widget */}
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

            <div className="cal-widget-container">
              <iframe
                src={selectedService.calUrl}
                width="100%"
                height="700"
                frameBorder="0"
                style={{
                  border: "none",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
                title="Calendrier de réservation"
              ></iframe>
            </div>

            <div className="step-actions">
              <button onClick={handleBack} className="btn btn--outline">
                Retour
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Info Section */}
      <section className="booking-info">
        <div className="container">
          <div className="info-cards">
            <div className="info-card">
              <div className="info-card__icon">💳</div>
              <h3 className="info-card__title">Paiement</h3>
              <p className="info-card__text">
                Le paiement s'effectue une fois le rendez-vous pris, par
                virement bancaire uniquement, au plus tard 24h avant la session
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
    </div>
  );
};

export default Booking;

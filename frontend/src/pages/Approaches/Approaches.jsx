// src/pages/Approaches/Approaches.jsx
import { Link } from "react-router-dom";
import "./Approaches.scss";

const Approaches = () => {
  const sessionBenefits = [
    {
      icon: "🧘",
      title: "Stratégies pour l'équilibre émotionnel",
      description:
        "Gestion du surmenage, régulation émotionnelle et équilibre énergétique",
    },
    {
      icon: "🎯",
      title: "Structure et routines durables",
      description:
        "Création de structures, routines et habitudes qui tiennent vraiment dans la durée",
    },
    {
      icon: "💭",
      title: "Outils basés sur l'ACT",
      description:
        "Techniques pour se libérer de l'autocritique, du perfectionnisme et de l'évitement",
    },
    {
      icon: "🌱",
      title: "Soutien au quotidien",
      description:
        "Accompagnement pour le stress, la concentration, la motivation et la prise de décision",
    },
    {
      icon: "🤝",
      title: "Responsabilisation bienveillante",
      description:
        "Guidance calme et compassionnelle — sans pression ni jugement",
    },
  ];

  const sessionOutcomes = [
    "Des outils pratiques utilisables dans la vie réelle",
    "Plus de clarté, de calme et de confiance",
    "Une meilleure compréhension du fonctionnement de votre cerveau",
    "Des étapes réalistes et durables — jamais écrasantes !",
  ];

  return (
    <div className="approaches">
      {/* Hero Section */}
      <section className="approaches-hero">
        <div className="approaches-hero__overlay"></div>
        <div className="container">
          <div className="approaches-hero__content">
            <h1 className="approaches-hero__title">Travailler avec moi</h1>
            <p className="approaches-hero__subtitle">
              Un accompagnement calme, pratique et accessible pour votre
              bien-être
            </p>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="how-it-works-detail">
        <div className="container">
          <h2 className="section-title text-center">
            Comment fonctionne l'accompagnement ?
          </h2>

          <div className="work-cards">
            {/* Card 1 */}
            <div className="work-card">
              <div className="work-card__icon">🖥️</div>
              <h3 className="work-card__title">Sessions en ligne 1:1</h3>
              <p className="work-card__description">
                Accessibles, flexibles et conçues pour travailler{" "}
                <strong>avec</strong> votre énergie, votre attention et votre
                style de vie — pas contre.
              </p>
            </div>

            {/* Card 2 */}
            <div className="work-card">
              <div className="work-card__icon">📆</div>
              <h3 className="work-card__title">
                Soutien hebdomadaire ou bimensuel
              </h3>
              <p className="work-card__description">
                La plupart des clients choisissent des sessions hebdomadaires ou
                bimensuelles, mais nous adaptons le rythme à vos capacités et
                objectifs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="work-card">
              <div className="work-card__icon">💛</div>
              <h3 className="work-card__title">Approche sur mesure</h3>
              <p className="work-card__description">
                Certains clients viennent pour un soutien ponctuel durant des
                périodes difficiles ; d'autres préfèrent un accompagnement à
                long terme pour construire un bien-être durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que vous obtenez */}
      <section className="session-content">
        <div className="container">
          <h2 className="section-title text-center">
            Ce que les sessions vous apportent
          </h2>
          <div className="benefits-grid">
            {sessionBenefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-card__icon">{benefit.icon}</div>
                <h3 className="benefit-card__title">{benefit.title}</h3>
                <p className="benefit-card__description">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Résultats concrets */}
      <section className="session-outcomes">
        <div className="container">
          <div className="outcomes-box">
            <h2 className="outcomes-box__title">
              ✨ Vous repartez de chaque session avec :
            </h2>
            <ul className="outcomes-list">
              {sessionOutcomes.map((outcome, index) => (
                <li key={index} className="outcomes-list__item">
                  <span className="outcomes-list__icon">✓</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="pricing">
        <div className="container">
          <h2 className="section-title text-center">Tarifs</h2>
          <div className="pricing-card">
            <div className="pricing-card__header">
              <h3 className="pricing-card__title">Sessions 1:1</h3>
              <p className="pricing-card__duration">
                50 minutes par visioconférence
              </p>
            </div>
            <div className="pricing-card__prices">
              <div className="price-option">
                <span className="price-option__currency">£</span>
                <span className="price-option__amount">50</span>
                <span className="price-option__label">GBP</span>
              </div>
              <div className="price-divider">|</div>
              <div className="price-option">
                <span className="price-option__currency">€</span>
                <span className="price-option__amount">57</span>
                <span className="price-option__label">EUR</span>
              </div>
              <div className="price-divider">|</div>
              <div className="price-option">
                <span className="price-option__currency">$</span>
                <span className="price-option__amount">67</span>
                <span className="price-option__label">USD</span>
              </div>
            </div>
            <p className="pricing-card__note">
              * Tarifs réduits disponibles pour les personnes en difficulté
              financière
            </p>
          </div>

          <div className="pricing-info">
            <div className="info-box">
              <h4>🤝 Accessibilité financière</h4>
              <p>
                Je propose des <strong>tarifs dégressifs</strong> pour les
                aidants, les étudiants et les personnes rencontrant des
                difficultés financières. Des tarifs réduits sont également
                disponibles pour les associations caritatives et les
                organisations à but non lucratif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="approaches-cta">
        <div className="container">
          <div className="approaches-cta__content">
            <h2 className="approaches-cta__title">Prêt(e) à commencer ?</h2>
            <p className="approaches-cta__text">
              Contactez-moi pour réserver votre première consultation gratuite
              de 20 minutes
            </p>

            <div className="contact-options">
              <div className="contact-option">
                <span className="contact-option__icon">📧</span>
                <div className="contact-option__content">
                  <strong>Email</strong>
                  <a href="mailto:info@cocobelletherapies.com">
                    info@cocobelletherapies.com
                  </a>
                </div>
              </div>
              <div className="contact-option">
                <span className="contact-option__icon">📱</span>
                <div className="contact-option__content">
                  <strong>WhatsApp</strong>
                  <a
                    href="https://wa.me/447801766737"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +44 7801 766737
                  </a>
                </div>
              </div>
            </div>

            <div className="approaches-cta__buttons">
              <Link to="/contact" className="btn btn--primary btn--large">
                Formulaire de contact complet
              </Link>
              <Link
                to="/rendez-vous"
                className="btn btn--outline-white btn--large"
              >
                Réserver une session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Approaches;

// src/pages/ADHD/ADHD.jsx
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./ADHD.scss";

const ADHD = () => {
  const supportAreas = [
    {
      icon: "🎯",
      title: "Régulation émotionnelle",
      items: [
        "Reconnaître les signes précoces de frustration, d'irritabilité ou de faible énergie",
        "Apprendre des stratégies pratiques pour répondre calmement plutôt que de réagir impulsivement",
      ],
    },
    {
      icon: "🎯",
      title: "Concentration & Motivation",
      items: [
        "Identifier ce qui compte vraiment et l'utiliser pour guider l'action",
        "Construire des routines et des habitudes qui fonctionnent même lors des journées à faible énergie",
      ],
    },
    {
      icon: "🎯",
      title: "Gestion de la procrastination & surcharge",
      items: [
        "Décomposer les tâches en étapes gérables",
        "Réduire la culpabilité et l'autocritique quand l'énergie ou la concentration diminue",
      ],
    },
    {
      icon: "🎯",
      title: "Vivre selon vos valeurs",
      items: [
        "Explorer ce qui compte le plus au-delà des échéances, distractions ou fluctuations d'énergie",
        "Laisser vos valeurs guider vos choix pour une vie plus épanouissante",
      ],
    },
  ];

  return (
    <div className="adhd">
      <Helmet>
        <title>Accompagnement TDAH | Coco Belle Therapies</title>
        <meta
          name="description"
          content="Accompagnement personnalisé pour adultes avec TDAH. Approche basée sur l'ACT pour gérer l'impulsivité, concentration et organisation. £50/session."
        />
        <meta
          name="keywords"
          content="TDAH adulte, trouble déficit attention, hyperactivité, ACT, thérapie TDAH, accompagnement TDAH"
        />
        <meta
          property="og:title"
          content="Accompagnement TDAH | Coco Belle Therapies"
        />
        <meta
          property="og:description"
          content="Accompagnement personnalisé pour adultes avec TDAH. Approche basée sur l'ACT."
        />
        <link
          rel="canonical"
          href="https://cocobelle-therapies.vercel.app/tdah"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="adhd-hero">
        <div className="adhd-hero__overlay"></div>
        <div className="container">
          <div className="adhd-hero__content">
            <h1 className="adhd-hero__title">
              Thérapie d'Acceptation et d'Engagement pour le TDAH
            </h1>
            <p className="adhd-hero__subtitle">
              Des outils pratiques et bienveillants pour gérer le TDAH au
              quotidien
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="adhd-intro">
        <div className="container">
          <div className="intro-content">
            <h2 className="section-title text-center">
              Vous sentez-vous parfois dépassé(e) par la vie ?
            </h2>
            <div className="intro-box">
              <p className="intro-text">
                Vos pensées s'emballent-elles ? Vos niveaux d'énergie
                fluctuent-ils ? La motivation disparaît-elle juste quand vous en
                avez le plus besoin ? <strong> Vous n'êtes pas seul(e).</strong>
              </p>
              <p className="intro-text">
                La{" "}
                <strong>
                  Thérapie d'Acceptation et d'Engagement (ACT) pour le TDAH
                </strong>{" "}
                vous offre des outils pratiques et bienveillants pour gérer les
                hauts et bas émotionnels, réduire la surcharge et avancer vers
                ce qui compte vraiment — sans autocritique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que l'ACT */}
      <section className="what-is-act">
        <div className="container">
          <div className="act-content">
            <div className="act-content__text">
              <h2 className="section-title">
                Qu'est-ce que l'ACT pour le TDAH ?
              </h2>
              <p>
                La <strong>Thérapie d'Acceptation et d'Engagement (ACT)</strong>{" "}
                est une approche bienveillante et fondée sur des données
                scientifiques qui vous aide à :
              </p>
              <ul className="act-list">
                <li>
                  <span className="act-list__icon">✓</span>
                  <span>
                    Identifier et accepter les pensées et émotions difficiles
                    sans vous y enliser
                  </span>
                </li>
                <li>
                  <span className="act-list__icon">✓</span>
                  <span>
                    Comprendre vos schémas émotionnels et fluctuations d'énergie
                  </span>
                </li>
                <li>
                  <span className="act-list__icon">✓</span>
                  <span>
                    Avancer par petites étapes régulières vers vos objectifs
                  </span>
                </li>
              </ul>
              <p className="highlight-text">
                Pour les adultes avec TDAH, l'ACT peut faciliter la gestion de
                la concentration, de la motivation, des variations émotionnelles
                et des périodes de faible énergie — tout en restant aligné(e)
                avec vos valeurs.
              </p>
            </div>
            <div className="act-content__logo">
              <div className="act-logo-container">
                <img
                  src="/act-logo.png"
                  alt="ACT - Acceptance and Commitment Therapy"
                />
                <p className="act-logo-caption">
                  Approche thérapeutique basée sur les preuves scientifiques
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment l'ACT vous accompagne */}
      <section className="adhd-support">
        <div className="container">
          <h2 className="section-title text-center">
            Comment l'ACT pour le TDAH vous accompagne
          </h2>
          <div className="support-grid">
            {supportAreas.map((area, index) => (
              <div key={index} className="support-card">
                <div className="support-card__icon">{area.icon}</div>
                <h3 className="support-card__title">{area.title}</h3>
                <ul className="support-card__list">
                  {area.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage / Citation */}
      <section className="adhd-quote">
        <div className="container">
          <div className="quote-box">
            <blockquote className="quote-box__text">
              "L'ACT m'a aidée à comprendre que je n'ai pas besoin de "réparer"
              mon TDAH. J'ai appris à travailler avec mon cerveau, pas contre
              lui."
            </blockquote>
            <cite className="quote-box__author"> Client, Royaume-Uni</cite>
          </div>
        </div>
      </section>

      {/* Pour qui est l'ACT TDAH */}
      <section className="adhd-for-whom">
        <div className="container">
          <h2 className="section-title text-center">
            L'ACT pour le TDAH est pour vous si...
          </h2>
          <div className="for-whom-grid">
            <div className="for-whom-card">
              <span className="for-whom-card__icon">💭</span>
              <p>Vous êtes submergé(e) par vos pensées et émotions</p>
            </div>
            <div className="for-whom-card">
              <span className="for-whom-card__icon">⚡</span>
              <p>Votre énergie et motivation fluctuent constamment</p>
            </div>
            <div className="for-whom-card">
              <span className="for-whom-card__icon">🔄</span>
              <p>Vous procrastinez malgré vos meilleures intentions</p>
            </div>
            <div className="for-whom-card">
              <span className="for-whom-card__icon">😰</span>
              <p>Vous vous critiquez pour ne pas être "assez productif(ve)"</p>
            </div>
            <div className="for-whom-card">
              <span className="for-whom-card__icon">🎯</span>
              <p>Vous voulez vivre en accord avec vos valeurs</p>
            </div>
            <div className="for-whom-card">
              <span className="for-whom-card__icon">🌱</span>
              <p>Vous cherchez une approche bienveillante et pratique</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que vous obtiendrez */}
      <section className="adhd-benefits">
        <div className="container">
          <div className="benefits-content">
            <h2 className="section-title">Ce que vous obtiendrez</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <span className="benefit-item__number">1</span>
                <div className="benefit-item__content">
                  <h3>Compréhension approfondie</h3>
                  <p>De votre fonctionnement unique et de vos schémas TDAH</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-item__number">2</span>
                <div className="benefit-item__content">
                  <h3>Outils pratiques</h3>
                  <p>
                    Techniques concrètes applicables immédiatement dans votre
                    quotidien
                  </p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-item__number">3</span>
                <div className="benefit-item__content">
                  <h3>Stratégies personnalisées</h3>
                  <p>
                    Adaptées à votre niveau d'énergie et à vos besoins
                    spécifiques
                  </p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-item__number">4</span>
                <div className="benefit-item__content">
                  <h3>Bienveillance envers soi</h3>
                  <p>
                    Réduction de l'autocritique et développement de
                    l'auto-compassion
                  </p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-item__number">5</span>
                <div className="benefit-item__content">
                  <h3>Vie alignée avec vos valeurs</h3>
                  <p>Clarté sur ce qui compte vraiment et comment y accéder</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-item__number">6</span>
                <div className="benefit-item__content">
                  <h3>Soutien continu</h3>
                  <p>
                    Accompagnement régulier et ajustements selon votre évolution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="adhd-cta">
        <div className="container">
          <div className="adhd-cta__content">
            <h2 className="adhd-cta__title">Prêt(e) à commencer ?</h2>
            <p className="adhd-cta__text">
              Les sessions ACT pour le TDAH sont disponibles en ligne et conçues
              selon vos besoins.
            </p>
            <p className="adhd-cta__text">
              Faites le premier petit pas aujourd'hui :
            </p>

            <div className="contact-options">
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
              <div className="contact-option">
                <span className="contact-option__icon">📧</span>
                <div className="contact-option__content">
                  <strong>Email</strong>
                  <a href="mailto:info@cocobelletherapies.com">
                    info@cocobelletherapies.com
                  </a>
                </div>
              </div>
            </div>

            <div className="adhd-cta__buttons">
              <Link to="/contact" className="btn btn--primary btn--large">
                Me contacter
              </Link>
              <Link
                to="/rendez-vous"
                className="btn btn--secondary-white btn--large"
              >
                Réserver une consultation gratuite
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ressources supplémentaires */}
      <section className="adhd-resources">
        <div className="container">
          <h2 className="section-title text-center">En savoir plus</h2>
          <div className="resources-grid resources-grid--centered">
            <Link to="/qui-suis-je" className="resource-card">
              <span className="resource-card__icon">👤</span>
              <h3>Mon parcours</h3>
              <p>Découvrez mon expérience personnelle avec le TDAH et l'ACT</p>
            </Link>
            <Link to="/mes-approches" className="resource-card">
              <span className="resource-card__icon">💼</span>
              <h3>Comment je travaille</h3>
              <p>Processus, tarifs et déroulement des sessions</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ADHD;

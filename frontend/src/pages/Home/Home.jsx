// src/pages/Home/Home.jsx
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Home.scss";

const Home = () => {
  const testimonials = [
    {
      text: "Annabel est une coach exceptionnelle qui apporte une expertise approfondie et une véritable compassion à chacun de ses patients. Sa capacité à identifier les causes profondes et à créer des plans de bien-être personnalisés a transformé la vie de nombreuses personnes.",
      author: "Mara H.",
      location: "États-Unis",
      rating: 5,
    },
    {
      text: "Je suis beaucoup plus motivée grâce à la responsabilisation douce que Belle apporte. Elle est une coach parfaite : réactive, toujours présente quand j'ai besoin d'elle, toujours positive et encourageante.",
      author: "Gertrude",
      location: "États-Unis",
      rating: 5,
    },
    {
      text: "Belle a été incroyable ! J'apprécie vraiment sa positivité et ses encouragements. L'investissement en vaut vraiment la peine !",
      author: "Clinique NeuroMed",
      location: "Canada",
      rating: 5,
    },
  ];

  return (
    <div className="home">
      <Helmet>
        <title>
          Coco Belle Therapies - Hypnothérapie & Accompagnement TDAH
        </title>
        <meta
          name="description"
          content="Hypnothérapie clinique et accompagnement TDAH pour adultes anglophones. Consultation gratuite de 20 minutes. Basée à Gujan-Mestras."
        />
        <meta
          name="keywords"
          content="hypnothérapie, TDAH, hypnose thérapeutique, thérapie, accompagnement TDAH, Gujan-Mestras, adultes anglophones"
        />
        <meta
          property="og:title"
          content="Coco Belle Therapies - Hypnothérapie & Accompagnement TDAH"
        />
        <meta
          property="og:description"
          content="Hypnothérapie clinique et accompagnement TDAH pour adultes anglophones. Consultation gratuite de 20 minutes."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://cocobelle-therapies.vercel.app"
        />
        <link rel="canonical" href="https://cocobelle-therapies.vercel.app" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero__overlay"></div>
        <div className="hero__content container">
          <div className="hero__text">
            <h1 className="hero__title">
              Retrouvez l'équilibre <br />
              et la sérénité
            </h1>
            <p className="hero__subtitle">
              Accompagnement personnalisé pour adultes anglophones avec TDAH,
              basé sur l'ACT, avec possibilité d'hypnose thérapeutique pour un
              travail plus en profondeur
            </p>
            <div className="hero__cta">
              <Link to="/rendez-vous" className="btn btn--primary">
                Prendre rendez-vous
              </Link>
              <Link to="/qui-suis-je" className="btn btn--secondary">
                Découvrir mon approche
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-intro">
        <div className="container">
          <div className="about-intro__content">
            <div className="about-intro__image">
              <img src="/belle.png" alt="Belle - Thérapeute certifiée" />
            </div>
            <div className="about-intro__text">
              <h2 className="section-title">Bonjour, je suis Belle ?</h2>
              <p>
                Je propose un accompagnement thérapeutique{" "}
                <strong>bienveillant et personnalisé</strong> pour les adultes
                anglophones, combinant les techniques de la Thérapie
                d'Acceptation et d'Engagement (ACT) et le coaching santé.
              </p>
              <p>
                Mon objectif : vous aider à développer une{" "}
                <strong>
                  meilleure concentration, un équilibre émotionnel durable{" "}
                </strong>{" "}
                et un bien-être en accord avec vos valeurs, avec une expertise
                particulière dans l'accompagnement des{" "}
                <strong>
                  adultes avec un TDAH (trouble du déficit de l'attention avec
                  ou sans hyperactivité)
                </strong>
                .
              </p>
              <div className="about-intro__features">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Espace sûr et sans jugement</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Approche personnalisée et pratique</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Stratégies concrètes et durables</span>
                </div>
              </div>
              <Link to="/qui-suis-je" className="btn btn--outline">
                En savoir plus sur mon parcours →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title text-center">Mes Services</h2>
          <p className="section-subtitle text-center">
            Un accompagnement sur mesure pour vos besoins spécifiques
          </p>
          <div className="services__grid">
            {/* Service TDAH */}
            <div className="service-card">
              <div className="service-card__icon">?</div>
              <h3 className="service-card__title">Accompagnement TDAH</h3>
              <p className="service-card__description">
                Stratégies pratiques pour gérer le stress, améliorer la
                concentration et développer des routines adaptées à votre
                fonctionnement unique.
              </p>
              <ul className="service-card__list">
                <li>Gestion du stress et du surmenage</li>
                <li>Techniques de mindfulness et d'attention</li>
                <li>Coaching ACT et solution-focused</li>
                <li>Habitudes de vie : mouvement, nutrition, routines</li>
              </ul>
              <Link to="/tdah" className="service-card__link">
                En savoir plus →
              </Link>
            </div>

            {/* Service Hypnose */}
            <div className="service-card">
              <div className="service-card__icon">?</div>
              <h3 className="service-card__title">Hypnose Thérapeutique</h3>
              <p className="service-card__description">
                Séances d'hypnose clinique pour l'anxiété, les phobies, la
                gestion de la douleur et le développement personnel.
              </p>
              <ul className="service-card__list">
                <li>Gestion de l'anxiété et du stress</li>
                <li>Traitement des phobies</li>
                <li>Amélioration du sommeil</li>
                <li>Confiance en soi et développement personnel</li>
              </ul>
              <Link to="/hypnose" className="service-card__link">
                En savoir plus →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title text-center">Comment ça marche ?</h2>
          <p className="section-subtitle text-center">
            Un processus simple et transparent en 3 étapes
          </p>
          <div className="steps">
            <div className="step">
              <div className="step__number">1</div>
              <h3 className="step__title">Premier Contact</h3>
              <p className="step__description">
                Discussion gratuite de 20 minutes pour comprendre vos besoins et
                voir si nous sommes faits pour travailler ensemble.
              </p>
            </div>
            <div className="step__arrow">→</div>
            <div className="step">
              <div className="step__number">2</div>
              <h3 className="step__title">Plan Personnalisé</h3>
              <p className="step__description">
                Élaboration d'une stratégie adaptée à vos objectifs spécifiques
                et à votre rythme.
              </p>
            </div>
            <div className="step__arrow">→</div>
            <div className="step">
              <div className="step__number">3</div>
              <h3 className="step__title">Accompagnement</h3>
              <p className="step__description">
                Sessions régulières 1:1 dans un espace bienveillant, sécurisant
                et sans jugement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title text-center">
            Ce que disent mes clients
          </h2>
          <div className="testimonials__grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-card__stars">
                  {"⭐".repeat(testimonial.rating)}
                </div>
                <p className="testimonial-card__text">"{testimonial.text}"</p>
                <div className="testimonial-card__author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications">
        <div className="container">
          <h2 className="section-title text-center">
            Certifications Professionnelles
          </h2>
          <p className="section-subtitle text-center">
            Formée et certifiée par des organismes reconnus internationalement
          </p>
          <div className="certifications__grid">
            {/* IPCF */}
            <div className="certification-badge">
              <div className="certification-badge__logo">
                <img
                  src="/ipcf-logo.png"
                  alt="International Psychotherapies and Counselling Federation"
                />
              </div>
              <h3>International Psychotherapies</h3>
              <p>Membre certifié</p>
            </div>

            {/* NRPC */}
            <div className="certification-badge">
              <div className="certification-badge__logo">
                <img
                  src="/nrpc-logo.png"
                  alt="National Register of Psychotherapists and Counsellors"
                />
              </div>
              <h3>NRPC</h3>
              <p>Membre vérifié</p>
            </div>

            {/* APHP */}
            <div className="certification-badge">
              <div className="certification-badge__logo">
                <img
                  src="/aphp-logo.png"
                  alt="Association for Professional Hypnosis and Psychotherapy"
                />
              </div>
              <h3>APHP</h3>
              <p>Praticien certifié</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: "2rem" }}>
            <Link to="/qui-suis-je" className="btn btn--outline">
              Voir toutes mes qualifications →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-section__content">
            <h2 className="cta-section__title">
              Prêt(e) à commencer votre parcours ?
            </h2>
            <p className="cta-section__text">
              Réservez votre consultation gratuite de 20 minutes dès aujourd'hui
            </p>
            <div className="cta-section__buttons">
              <Link to="/rendez-vous" className="btn btn--primary btn--large">
                Réserver une consultation
              </Link>
              <Link
                to="/contact"
                className="btn btn--secondary-white btn--large"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-home">
        <div className="container">
          <h2 className="section-title text-center">Restons en contact</h2>
          <div className="contact-home__info">
            <div className="contact-info">
              <div className="contact-info__item">
                <span className="contact-info__icon">?</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:info@cocobelletherapies.com">
                    info@cocobelletherapies.com
                  </a>
                </div>
              </div>
              <div className="contact-info__item">
                <span className="contact-info__icon">?</span>
                <div>
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
          </div>
          <div className="text-center" style={{ marginTop: "2rem" }}>
            <Link to="/contact" className="btn btn--primary">
              Formulaire de contact complet →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

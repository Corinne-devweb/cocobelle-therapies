// src/pages/About/About.jsx
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./About.scss";

const About = () => {
  const academicQualifications = [
    {
      degree: "MSc Medical Anthropology & Sociology",
      institution: "University of Amsterdam",
      icon: "🎓",
    },
    {
      degree: "Post-grad Cert. Psychology",
      institution: "University of Derby (BACP accrédité)",
      icon: "🧠",
    },
    {
      degree: "BA Social Anthropology",
      institution: "University of Kent & VU Amsterdam",
      icon: "📚",
    },
  ];

  const professionalTraining = [
    {
      title: "Diplôme en Hypnothérapie Clinique basée sur la pleine conscience",
      details:
        "Hypnothérapie cognitivo-comportementale, Programmation Neuro-Linguistique (PNL), Accompagnement centré sur les Solutions",
    },
    {
      title: "Formation d'enseignant en pleine conscience",
      details:
        "Thérapie Cognitive basée sur la pleine conscience (MBCT), Réduction du Stress - Approche thérapeutique basée sur la pleine conscience (MBSR)",
    },
    {
      title:
        "Accompagnement psychologique rétablissement après le cancer par la pleine conscience",
      details: null,
    },
    {
      title: "Sensibilisation à la Santé Mentale",
      details: null,
    },
    {
      title: "Coaching TDAH",
      details: null,
    },
    {
      title: "Thérapie d'Acceptation et d'Engagement (ACT)",
      subtitle:
        "Formation avec Daniel Morgan & Stephen Hayes - ACT pour le TDAH - Rus Harris",
      details: null,
    },
    {
      title: "Coach Sportif Personnel (niveau 3)",
      details: null,
    },
  ];

  const accreditations = [
    {
      name: "NRPC",
      fullName: "National Register for Psychotherapists & Counsellors",
      logo: "/nrpc-logo.png",
    },
    {
      name: "IPCF",
      fullName: "International Counselling and Psychotherapy Society",
      logo: "/ipcf-logo.png",
    },
    {
      name: "APHP",
      fullName: "Association for Professional Hypnosis & Psychotherapy",
      logo: "/aphp-logo.png",
    },
  ];

  return (
    <div className="about">
      <Helmet>
        <title>Qui suis-je | Coco Belle Therapies</title>
        <meta
          name="description"
          content="Découvrez Annabel, hypnothérapeute clinique formée à l'ACT et spécialisée dans l'accompagnement TDAH. Consultation gratuite disponible."
        />
        <meta
          name="keywords"
          content="Annabel Coulthard, hypnothérapeute, ACT, TDAH, thérapie d'acceptation et d'engagement"
        />
        <meta
          property="og:title"
          content="Qui suis-je | Coco Belle Therapies"
        />
        <meta
          property="og:description"
          content="Découvrez Annabel, hypnothérapeute clinique formée à l'ACT et spécialisée dans l'accompagnement TDAH."
        />
        <link
          rel="canonical"
          href="https://cocobelle-therapies.vercel.app/qui-suis-je"
        />
      </Helmet>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__overlay"></div>
        <div className="container">
          <div className="about-hero__content">
            <div className="about-hero__image">
              <img src="/belle-2.png" alt="Annabel Eve - Thérapeute" />
            </div>
            <div className="about-hero__text">
              <h1 className="about-hero__title">Qui suis-je ?</h1>
              <p className="about-hero__subtitle">Annabel Eve Coulthard, MSc</p>
              <blockquote className="about-hero__quote">
                "La vie est dure, ma chérie — parfois, il faut simplement
                choisir d'être forte"
                <cite>— Sagesse de ma grand-mère</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Mon Histoire - Timeline */}
      <section className="about-story">
        <div className="container">
          <h2 className="section-title text-center">Mon Parcours</h2>
          <p className="section-subtitle text-center">
            De la vulnérabilité à l'accompagnement thérapeutique
          </p>

          <div className="timeline">
            {/* Étape 1 : L'accident */}
            <div className="timeline-item">
              <div className="timeline-item__marker">
                <div className="timeline-item__icon">🌟</div>
              </div>
              <div className="timeline-item__content">
                <h3 className="timeline-item__title">
                  17 ans : Le point de départ
                </h3>
                <p className="timeline-item__text">
                  Mon parcours dans le bien-être thérapeutique a commencé à 17
                  ans, après avoir été témoin d'un accident de voiture mortel et
                  avoir reçu un diagnostic de{" "}
                  <strong>TSPT (Trouble de Stress Post-Traumatique)</strong>.
                  L'anxiété a pris le contrôle de ma vie, je peinais à sortir de
                  chez moi, à passer mes examens, ou même à faire la queue dans
                  un magasin.
                </p>
                <p className="timeline-item__text">
                  La thérapie traditionnelle ne me convenait pas à l'époque,
                  j'ai donc cherché à comprendre ce qui se passait dans mon
                  esprit et dans mon corps de manière pratique et concrète.
                </p>
              </div>
            </div>

            {/* Étape 2 : La découverte */}
            <div className="timeline-item">
              <div className="timeline-item__marker">
                <div className="timeline-item__icon">💡</div>
              </div>
              <div className="timeline-item__content">
                <h3 className="timeline-item__title">La découverte de l'ACT</h3>
                <p className="timeline-item__text">
                  En parallèle de mes recherches sur les traumatismes, le
                  système nerveux, la pleine conscience et la manière dont nous
                  faisons face à l'adversité, je me suis appuyée sur une sagesse
                  simple transmise par ma grand-mère :
                  <em>
                    "La vie est dure, ma chérie — parfois, il faut simplement
                    choisir d'être forte"
                  </em>
                  — très stoïque et old school, je sais, mais cela m'est resté.
                </p>
                <p className="timeline-item__text">
                  J'ai ensuite découvert les principes de la{" "}
                  <strong>
                    Thérapie d'Acceptation et d'Engagement (ACT),{" "}
                  </strong>
                  qui semblaient réunir tout ce qui précède et m'ont aidée à me
                  reconstruire, doucement et de manière réaliste.
                </p>
              </div>
            </div>

            {/* Étape 3 : Les études */}
            <div className="timeline-item">
              <div className="timeline-item__marker">
                <div className="timeline-item__icon">🎓</div>
              </div>
              <div className="timeline-item__content">
                <h3 className="timeline-item__title">Études et recherches</h3>
                <p className="timeline-item__text">
                  Avec le temps, la curiosité a remplacé la peur. J'ai poursuivi
                  des études en
                  <strong> anthropologie médicale et en psychologie</strong>,
                  concentrant mes recherches sur le trouble de stress
                  post-traumatique (TSPT) et la résilience.
                </p>
                <p className="timeline-item__text">
                  J'ai interviewé des survivants de l'ouragan Katrina au sujet
                  de leur rétablissement, de leur force intérieure et de
                  l'importance de la façon dont nous choisissons de traiter les
                  événements extérieurs qui nous impactent. Je me suis
                  particulièrement intéressée à la manière dont les perspectives
                  zen bouddhistes pouvaient aider les individus à trouver le
                  calme face à l'adversité.
                </p>
              </div>
            </div>

            {/* Étape 4 : ADHD */}
            <div className="timeline-item">
              <div className="timeline-item__marker">
                <div className="timeline-item__icon">🧩</div>
              </div>
              <div className="timeline-item__content">
                <h3 className="timeline-item__title">Découverte du TDAH</h3>
                <p className="timeline-item__text">
                  Au fil du chemin, il a été suggéré que je puisse avoir un{" "}
                  <strong>TDAH (possiblement AuDHD — autisme + TDAH).</strong>
                  Comprendre ces traits m'a soudain permis de mettre des mots
                  sur de nombreuses difficultés qui m'accompagnaient depuis
                  toujours.
                </p>
              </div>
            </div>

            {/* Étape 5 : Aujourd'hui */}
            <div className="timeline-item">
              <div className="timeline-item__marker">
                <div className="timeline-item__icon">🌱</div>
              </div>
              <div className="timeline-item__content">
                <h3 className="timeline-item__title">
                  Aujourd'hui : Coco Belle Therapies
                </h3>
                <p className="timeline-item__text">
                  Maintenant, plus d'une décennie plus tard, j'ai vécu,
                  travaillé et étudié dans
                  <strong> cinq pays différents</strong>. À travers Coco Belle
                  Therapies, je partage les outils qui m'ont véritablement aidée
                  — des pratiques d'ancrage, un soutien basé sur l'ACT, et des
                  méthodes adaptées au TDAH qui visent à restaurer un sentiment
                  de <strong>"C'est bon, je gère"</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi cette approche */}
      <section className="about-philosophy">
        <div className="container">
          <div className="about-philosophy__content">
            <div className="about-philosophy__text">
              <h2 className="section-title">Pourquoi cette approche ?</h2>
              <p>
                Mon expérience personnelle avec le TSPT, l'anxiété et le TDAH
                m'a appris que
                <strong>
                  {" "}
                  les approches thérapeutiques doivent être pratiques, réalistes
                  et accessibles
                </strong>
                .
              </p>
              <p>
                Je ne crois pas aux solutions miracles ou aux promesses
                irréalistes. Je crois en un accompagnement bienveillant qui
                respecte votre rythme, vos défis uniques et vos forces.
              </p>
              <div className="philosophy-points">
                <div className="philosophy-point">
                  <span className="philosophy-point__icon">✓</span>
                  <div>
                    <strong>Approche basée sur l'ACT</strong>
                    <p>
                      Acceptation, engagement et valeurs au cœur du processus
                    </p>
                  </div>
                </div>
                <div className="philosophy-point">
                  <span className="philosophy-point__icon">✓</span>
                  <div>
                    <strong>Sensible au TDAH</strong>
                    <p>Stratégies adaptées au fonctionnement neurodivers</p>
                  </div>
                </div>
                <div className="philosophy-point">
                  <span className="philosophy-point__icon">✓</span>
                  <div>
                    <strong>Pratique et réaliste</strong>
                    <p>
                      Outils concrets que vous pouvez appliquer immédiatement
                    </p>
                  </div>
                </div>
                <div className="philosophy-point">
                  <span className="philosophy-point__icon">✓</span>
                  <div>
                    <strong>Espace sûr et sans jugement</strong>
                    <p>
                      Vous êtes accueilli(e) exactement tel(le) que vous êtes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-philosophy__image">
              <img src="/belle.png" alt="Belle - Approche thérapeutique" />
            </div>
          </div>
        </div>
      </section>

      {/* Formations académiques */}
      <section className="about-education">
        <div className="container">
          <h2 className="section-title text-center">Formations Académiques</h2>
          <div className="education-grid">
            {academicQualifications.map((qual, index) => (
              <div key={index} className="education-card">
                <div className="education-card__icon">{qual.icon}</div>
                <h3 className="education-card__degree">{qual.degree}</h3>
                <p className="education-card__institution">
                  {qual.institution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formations professionnelles */}
      <section className="about-training">
        <div className="container">
          <h2 className="section-title text-center">
            Formations Professionnelles
          </h2>
          <div className="training-list">
            {professionalTraining.map((training, index) => (
              <div key={index} className="training-item">
                <span className="training-item__icon">✓</span>
                <div className="training-item__text">
                  <strong>{training.title}</strong>
                  {training.subtitle && <em>{training.subtitle}</em>}
                  {training.details && <span>{training.details}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accréditations */}
      <section className="about-accreditations">
        <div className="container">
          <h2 className="section-title text-center">
            Accréditations & Adhésions
          </h2>
          <p className="section-subtitle text-center">
            Membre d'organismes professionnels reconnus internationalement
          </p>
          <div className="accreditations-grid">
            {accreditations.map((accred, index) => (
              <div key={index} className="accreditation-card">
                <div className="accreditation-card__logo">
                  <img src={accred.logo} alt={accred.fullName} />
                </div>
                <h3>{accred.name}</h3>
                <p>{accred.fullName}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibilité */}
      <section className="about-accessibility">
        <div className="container">
          <div className="accessibility-box">
            <h2 className="accessibility-box__title">🤝 Accessibilité</h2>
            <p className="accessibility-box__text">
              Le soutien devrait être accessible à tous. Je propose des{" "}
              <strong>tarifs dégressifs</strong> pour les aidants, les étudiants
              et les personnes en difficulté financière.
            </p>
            <p className="accessibility-box__text">
              Des <strong>tarifs réduits</strong> sont également disponibles
              pour les associations caritatives et les organisations à but non
              lucratif — n'hésitez pas à me contacter.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta__content">
            <h2 className="about-cta__title">Prêt(e) à commencer ?</h2>
            <p className="about-cta__text">
              Réservez votre consultation gratuite de 20 minutes
            </p>
            <div className="about-cta__buttons">
              <Link to="/rendez-vous" className="btn btn--primary btn--large">
                Prendre rendez-vous
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
    </div>
  );
};

export default About;

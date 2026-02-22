// src/pages/Hypnotherapy/Hypnotherapy.jsx
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Hypnotherapy.scss";

const Hypnotherapy = () => {
  const components = [
    {
      icon: "🧠",
      logo: "/behaviors-logo.png",
      title: "Hypnothérapie Comportementale Cognitive (HCC)",
      description:
        "Combine les techniques de thérapie cognitivo-comportementale avec l'hypnose pour vous aider à modifier les schémas de pensée négative et les comportements en accédant à votre subconscient.",
    },
    {
      icon: "🎯",
      logo: "/solutions-logo.png",
      title: "Hypnothérapie Orientée Solutions",
      description:
        "Une approche thérapeutique qui combine les principes de la thérapie brève centrée sur les solutions avec l'hypnose pour vous aider à atteindre vos objectifs en vous concentrant sur les solutions plutôt que sur les problèmes.",
    },
    {
      icon: "💭",
      logo: "/nlp-logo.png",
      title: "Programmation Neuro-Linguistique (PNL)",
      description:
        "Une approche psychologique qui explore la connexion entre les processus neurologiques, le langage et les schémas comportementaux pour vous aider à atteindre le développement personnel et améliorer la communication.",
    },
  ];

  const benefits = [
    {
      icon: "😌",
      title: "Gestion de l'anxiété et du stress",
      description:
        "Techniques pour calmer l'esprit et réduire les symptômes d'anxiété",
    },
    {
      icon: "😨",
      title: "Traitement des phobies",
      description: "Approche douce pour surmonter les peurs et les phobies",
    },
    {
      icon: "😔",
      title: "Accompagnement de la dépression",
      description: "Soutien pour retrouver motivation et bien-être émotionnel",
    },
    {
      icon: "😴",
      title: "Amélioration du sommeil",
      description: "Techniques pour favoriser un sommeil réparateur et profond",
    },
    {
      icon: "🚬",
      title: "Arrêt du tabac et addictions",
      description: "Soutien pour se libérer des dépendances",
    },
    {
      icon: "💪",
      title: "Confiance en soi",
      description: "Renforcement de l'estime de soi et de la confiance",
    },
    {
      icon: "🎭",
      title: "Gestion des émotions",
      description: "Outils pour mieux comprendre et gérer vos émotions",
    },
    {
      icon: "🧘",
      title: "Gestion de la douleur",
      description: "Techniques pour mieux vivre avec la douleur chronique",
    },
  ];

  return (
    <div className="hypnotherapy">
      <Helmet>
        <title>Hypnothérapie Clinique | Coco Belle Therapies</title>
        <meta
          name="description"
          content="Hypnose thérapeutique pour gestion du stress, anxiété, phobies et développement personnel. Approche bienveillante et personnalisée. £60/session."
        />
        <meta
          name="keywords"
          content="hypnose clinique, hypnothérapie, stress, anxiété, phobies, développement personnel, thérapie hypnotique"
        />
        <meta
          property="og:title"
          content="Hypnothérapie Clinique | Coco Belle Therapies"
        />
        <meta
          property="og:description"
          content="Hypnose thérapeutique pour gestion du stress, anxiété, phobies et développement personnel."
        />
        <link
          rel="canonical"
          href="https://cocobelle-therapies.vercel.app/hypnose"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="hypnotherapy-hero">
        <div className="hypnotherapy-hero__overlay"></div>
        <div className="container">
          <div className="hypnotherapy-hero__content">
            <h1 className="hypnotherapy-hero__title">
              Hypnothérapie Clinique basée sur la pleine conscience
            </h1>
            <p className="hypnotherapy-hero__subtitle">
              Une approche intégrative pour créer un changement durable
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="hypnotherapy-intro">
        <div className="container">
          <div className="intro-content">
            <h2 className="section-title text-center">
              Un accompagnement en profondeur pour un changement durable
            </h2>
            <div className="intro-box">
              <p className="intro-text">
                Si vous luttez contre l'anxiété, la dépression, les peurs ou le
                stress, et que vous êtes intéressé(e) par un travail en
                profondeur, je propose également un service d'
                <strong>
                  hypnothérapie clinique basée sur la pleine conscience
                </strong>
                .
              </p>
              <p className="intro-text">
                En tant qu'approche intégrative, l'
                <strong>
                  Hypnothérapie Clinique basée sur la pleine conscience{" "}
                </strong>
                peut vous aider à vous libérer de ces schémas et à créer un
                changement durable — en associant l'attention consciente, des
                techniques de relaxation et des stratégies thérapeutiques.
              </p>
              <p className="intro-highlight">
                Les sessions sont en ligne, confidentielles et adaptées à vos
                besoins.
              </p>
              <p className="intro-text">
                Que vous recherchiez un soulagement du stress, de l'anxiété ou
                de problèmes émotionnels plus profonds, cette approche est
                conçue pour vous aider à gérer et transformer efficacement ces
                défis, à un niveau plus profond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Les 3 composantes */}
      <section className="hypnotherapy-components">
        <div className="container">
          <h2 className="section-title text-center">
            L'Hypnothérapie Clinique basée sur la pleine conscience comprend 3
            composantes clés
          </h2>
          <div className="components-grid">
            {components.map((component, index) => (
              <div key={index} className="component-card">
                <div className="component-card__logo">
                  <img src={component.logo} alt={component.title} />
                </div>
                <h3 className="component-card__title">{component.title}</h3>
                <p className="component-card__description">
                  {component.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qu'est-ce que l'hypnose */}
      <section className="what-is-hypnosis">
        <div className="container">
          <div className="hypnosis-content">
            <div className="hypnosis-content__text">
              <h2 className="section-title">Qu'est-ce que l'hypnose ?</h2>
              <p>
                L'hypnose est un{" "}
                <strong>état naturel de conscience modifiée</strong>, similaire
                à la méditation profonde ou à l'état juste avant de s'endormir.
                C'est un état de relaxation profonde où votre esprit devient
                plus réceptif aux suggestions positives.
              </p>
              <div className="myth-box">
                <h3>💡 Idées reçues sur l'hypnose</h3>
                <ul>
                  <li>
                    <strong>Mythe :</strong> Vous perdez le contrôle
                    <br />
                    <strong>Réalité :</strong> Vous restez conscient(e) et en
                    contrôle à tout moment
                  </li>
                  <li>
                    <strong>Mythe :</strong> C'est comme l'hypnose de spectacle
                    <br />
                    <strong>Réalité :</strong> L'hypnothérapie clinique est une
                    approche thérapeutique sérieuse et professionnelle
                  </li>
                  <li>
                    <strong>Mythe :</strong> Ça ne fonctionne pas sur tout le
                    monde
                    <br />
                    <strong>Réalité :</strong> La plupart des gens peuvent
                    entrer en état d'hypnose avec un bon accompagnement
                  </li>
                </ul>
              </div>
            </div>
            <div className="hypnosis-content__image">
              <div className="relaxation-visual">
                <div className="wave wave-1"></div>
                <div className="wave wave-2"></div>
                <div className="wave wave-3"></div>
                <p className="relaxation-text">État de relaxation profonde</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pour quoi l'hypnose peut aider */}
      <section className="hypnotherapy-benefits">
        <div className="container">
          <h2 className="section-title text-center">
            L'hypnothérapie peut vous aider avec
          </h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
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

      {/* Comment se déroule une session */}
      <section className="session-process">
        <div className="container">
          <h2 className="section-title text-center">
            Comment se déroule une session ?
          </h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step__number">1</div>
              <div className="process-step__content">
                <h3>Discussion initiale</h3>
                <p>
                  Nous discutons de vos objectifs, préoccupations et de ce que
                  vous souhaitez atteindre à travers l'hypnothérapie.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step__number">2</div>
              <div className="process-step__content">
                <h3>Induction et relaxation</h3>
                <p>
                  Je vous guide vers un état de relaxation profonde à travers
                  des techniques de respiration et de visualisation.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step__number">3</div>
              <div className="process-step__content">
                <h3>Travail thérapeutique</h3>
                <p>
                  En état d'hypnose, nous travaillons sur vos objectifs
                  spécifiques avec des suggestions positives et des techniques
                  adaptées.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step__number">4</div>
              <div className="process-step__content">
                <h3>Retour et intégration</h3>
                <p>
                  Je vous ramène doucement à un état de conscience normale et
                  nous discutons de votre expérience et des prochaines étapes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="hypnotherapy-pricing">
        <div className="container">
          <div className="pricing-box">
            <h2 className="pricing-box__title">
              Tarifs Hypnothérapie Clinique
            </h2>
            <div className="pricing-box__prices">
              <div className="price-item">
                <span className="price-item__currency">£</span>
                <span className="price-item__amount">60</span>
              </div>
              <span className="price-divider">|</span>
              <div className="price-item">
                <span className="price-item__currency">€</span>
                <span className="price-item__amount">68</span>
              </div>
              <span className="price-divider">|</span>
              <div className="price-item">
                <span className="price-item__currency">$</span>
                <span className="price-item__amount">80</span>
              </div>
            </div>
            <p className="pricing-box__duration">
              Session de 50 minutes en ligne
            </p>
            <p className="pricing-box__note">
              * Tarifs réduits disponibles pour les personnes en difficulté
              financière
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="hypnotherapy-faq">
        <div className="container">
          <h2 className="section-title text-center">Questions fréquentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-item__question">
                Est-ce que je vais perdre le contrôle ?
              </h3>
              <p className="faq-item__answer">
                Non, absolument pas. Vous restez conscient(e) et en contrôle à
                tout moment. L'hypnose est un état de relaxation profonde, pas
                un état d'inconscience.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-item__question">
                Combien de sessions sont nécessaires ?
              </h3>
              <p className="faq-item__answer">
                Cela dépend de vos objectifs. Certains clients voient des
                résultats en 3-4 sessions, d'autres préfèrent un accompagnement
                plus long. Nous adaptons le nombre de sessions à vos besoins.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-item__question">
                L'hypnose fonctionne-t-elle en ligne ?
              </h3>
              <p className="faq-item__answer">
                Oui ! L'hypnothérapie en ligne est tout aussi efficace qu'en
                présentiel. Vous pouvez vous détendre confortablement chez vous,
                ce qui peut même faciliter l'état d'hypnose.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-item__question">
                Est-ce que tout le monde peut être hypnotisé ?
              </h3>
              <p className="faq-item__answer">
                La plupart des gens peuvent entrer en état d'hypnose. Cela
                nécessite simplement votre volonté de participer et de vous
                détendre. Certaines personnes y parviennent plus facilement que
                d'autres, mais avec de la pratique, presque tout le monde peut y
                arriver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hypnotherapy-cta">
        <div className="container">
          <div className="hypnotherapy-cta__content">
            <h2 className="hypnotherapy-cta__title">Intéressé(e) ?</h2>
            <p className="hypnotherapy-cta__text">
              Si vous êtes intéressé(e) par l'Hypnothérapie Clinique basée sur
              la pleine conscience, n'hésitez pas à me contacter pour discuter
              de vos besoins.
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

            <div className="hypnotherapy-cta__buttons">
              <Link to="/contact" className="btn btn--primary btn--large">
                Me contacter
              </Link>
              <Link
                to="/rendez-vous"
                className="btn btn--secondary-white btn--large"
              >
                Réserver une consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hypnotherapy;

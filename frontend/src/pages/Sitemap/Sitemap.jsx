// src/pages/Sitemap/Sitemap.jsx
import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <div className="legal-page">
      <header className="legal-page__header">
        <h1 className="legal-page__title">Plan du Site</h1>
        <p className="legal-page__subtitle">
          Retrouvez toutes les pages du site Coco Belle Therapies
        </p>
      </header>

      {/* Pages principales */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">Pages principales</h2>
        <div className="legal-page__section-content">
          <ul className="legal-page__checklist">
            <li>
              <Link to="/">🏠 Accueil</Link>
            </li>
            <li>
              <Link to="/qui-suis-je">👤 Qui suis-je</Link>
            </li>
            <li>
              <Link to="/mes-approches">📋 Mes approches</Link>
            </li>
            <li>
              <Link to="/tdah">🧠 TDAH</Link>
            </li>
            <li>
              <Link to="/hypnose">🌀 Hypnothérapie</Link>
            </li>
            <li>
              <Link to="/rendez-vous">🗓️ Prendre rendez-vous</Link>
            </li>
            <li>
              <Link to="/contact">📧 Contact</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Espace client */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">Espace client</h2>
        <div className="legal-page__section-content">
          <ul className="legal-page__checklist">
            <li>
              <Link to="/connexion">🔐 Connexion</Link>
            </li>
            <li>
              <Link to="/inscription">📝 Inscription</Link>
            </li>
            <li>
              <Link to="/mon-compte">👤 Mon compte</Link>{" "}
              <span style={{ color: "#2A7A73", fontSize: "0.875rem" }}>
                (Protégé)
              </span>
            </li>
            <li>
              <Link to="/mot-de-passe-oublie">🔑 Mot de passe oublié</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Pages légales */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">Informations légales</h2>
        <div className="legal-page__section-content">
          <ul className="legal-page__checklist">
            <li>
              <Link to="/mentions-legales">📄 Mentions légales</Link>
            </li>
            <li>
              <Link to="/politique-confidentialite">
                🔒 Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link to="/gestion-cookies">🍪 Gestion des cookies</Link>
            </li>
            <li>
              <Link to="/plan-du-site">🗺️ Plan du site</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <div className="legal-page__contact">
        <h3>Une question ? Contactez-moi !</h3>
        <p>
          <Link to="/contact">📧 Me contacter</Link> |{" "}
          <Link to="/rendez-vous">🗓️ Prendre rendez-vous</Link>
        </p>
      </div>
    </div>
  );
};

export default Sitemap;

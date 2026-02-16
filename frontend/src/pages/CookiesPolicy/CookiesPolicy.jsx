// src/pages/CookiesPolicy/CookiesPolicy.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const CookiesPolicy = () => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [preferencesEnabled, setPreferencesEnabled] = useState(true);

  const handleSavePreferences = () => {
    // Ici vous pourrez plus tard implémenter la logique de sauvegarde
    alert("Vos préférences ont été enregistrées !");
  };

  const handleAcceptAll = () => {
    setAnalyticsEnabled(true);
    setPreferencesEnabled(true);
    alert("Tous les cookies ont été acceptés !");
  };

  const handleRejectAll = () => {
    setAnalyticsEnabled(false);
    setPreferencesEnabled(false);
    alert("Tous les cookies non essentiels ont été refusés !");
  };

  return (
    <div className="legal-page">
      <header className="legal-page__header">
        <h1 className="legal-page__title">Gestion des Cookies</h1>
        <p className="legal-page__subtitle">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>
      </header>

      {/* Introduction */}
      <div className="legal-page__info-box">
        <p>
          <strong>Coco Belle Therapies</strong> utilise des cookies pour
          améliorer votre expérience de navigation et analyser l'utilisation du
          site. Cette page vous explique ce que sont les cookies, comment nous
          les utilisons et comment vous pouvez les gérer.
        </p>
      </div>

      {/* Section 1 : Qu'est-ce qu'un cookie */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">
          1. Qu'est-ce qu'un cookie ?
        </h2>
        <div className="legal-page__section-content">
          <p>
            Un cookie est un petit fichier texte déposé sur votre ordinateur,
            tablette ou smartphone lors de votre visite sur un site web. Les
            cookies permettent au site de mémoriser vos actions et préférences
            pendant une période donnée.
          </p>
          <p>
            Les cookies ne contiennent pas de virus et ne peuvent pas accéder à
            vos données personnelles sans votre consentement.
          </p>
        </div>
      </section>

      {/* Section 2 : Types de cookies */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">
          2. Types de cookies utilisés
        </h2>
        <div className="legal-page__section-content">
          {/* Cookies essentiels */}
          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontSize: "1.2rem",
                marginBottom: "1rem",
                color: "#2A7A73",
                fontWeight: "600",
              }}
            >
              🔒 Cookies essentiels (obligatoires)
            </h3>
            <p>
              Ces cookies sont nécessaires au fonctionnement du site et ne
              peuvent pas être désactivés. Ils permettent notamment de :
            </p>
            <ul className="legal-page__checklist">
              <li>Maintenir votre session de connexion</li>
              <li>Mémoriser vos préférences de cookies</li>
              <li>Assurer la sécurité du site</li>
              <li>Permettre la navigation entre les pages</li>
            </ul>
            <table className="legal-page__table" style={{ marginTop: "1rem" }}>
              <thead>
                <tr>
                  <th>Nom du cookie</th>
                  <th>Durée</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>session_id</td>
                  <td>Session</td>
                  <td>Gestion de la connexion utilisateur</td>
                </tr>
                <tr>
                  <td>csrf_token</td>
                  <td>Session</td>
                  <td>Protection contre les attaques CSRF</td>
                </tr>
                <tr>
                  <td>cookie_consent</td>
                  <td>12 mois</td>
                  <td>Mémorisation de vos préférences cookies</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cookies analytiques */}
          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontSize: "1.2rem",
                marginBottom: "1rem",
                color: "#2A7A73",
                fontWeight: "600",
              }}
            >
              📊 Cookies analytiques (optionnels)
            </h3>
            <p>
              Ces cookies nous permettent de mesurer l'audience et d'analyser
              l'utilisation du site pour améliorer nos services. Les données
              collectées sont anonymisées.
            </p>
            <ul className="legal-page__checklist">
              <li>Nombre de visiteurs et pages vues</li>
              <li>Durée des visites</li>
              <li>Pages les plus consultées</li>
              <li>Provenance des visiteurs</li>
            </ul>
            <table className="legal-page__table" style={{ marginTop: "1rem" }}>
              <thead>
                <tr>
                  <th>Nom du cookie</th>
                  <th>Durée</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_ga</td>
                  <td>13 mois</td>
                  <td>Google Analytics - Identification visiteur</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>24 heures</td>
                  <td>Google Analytics - Statistiques</td>
                </tr>
                <tr>
                  <td>_gat</td>
                  <td>1 minute</td>
                  <td>Google Analytics - Limitation requêtes</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cookies de préférence */}
          <div>
            <h3
              style={{
                fontSize: "1.2rem",
                marginBottom: "1rem",
                color: "#2A7A73",
                fontWeight: "600",
              }}
            >
              ⚙️ Cookies de préférence (optionnels)
            </h3>
            <p>
              Ces cookies permettent de mémoriser vos préférences pour améliorer
              votre expérience de navigation.
            </p>
            <ul className="legal-page__checklist">
              <li>Langue préférée</li>
              <li>Préférences d'affichage</li>
              <li>Dernières recherches</li>
            </ul>
            <table className="legal-page__table" style={{ marginTop: "1rem" }}>
              <thead>
                <tr>
                  <th>Nom du cookie</th>
                  <th>Durée</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>user_preferences</td>
                  <td>12 mois</td>
                  <td>Mémorisation de vos préférences</td>
                </tr>
                <tr>
                  <td>language</td>
                  <td>12 mois</td>
                  <td>Langue préférée</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3 : Gérer vos préférences */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">
          3. Gérer vos préférences cookies
        </h2>
        <div className="legal-page__section-content">
          {/* Panneau de gestion */}
          <div
            style={{
              padding: "2rem",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
              border: "2px solid #2A7A73",
              marginBottom: "2rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.3rem",
                marginBottom: "1.5rem",
                color: "#2A7A73",
                textAlign: "center",
              }}
            >
              Personnalisez vos préférences
            </h3>

            {/* Cookie essentiels */}
            <div
              style={{
                marginBottom: "1.5rem",
                padding: "1rem",
                backgroundColor: "white",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <strong style={{ fontSize: "1.1rem" }}>
                    🔒 Cookies essentiels
                  </strong>
                  <p
                    style={{
                      margin: "0.5rem 0 0 0",
                      fontSize: "0.9rem",
                      color: "#666",
                    }}
                  >
                    Nécessaires au fonctionnement du site
                  </p>
                </div>
                <div
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#e9ecef",
                    borderRadius: "4px",
                    fontSize: "0.9rem",
                    color: "#666",
                  }}
                >
                  Toujours actifs
                </div>
              </div>
            </div>

            {/* Cookies analytiques */}
            <div
              style={{
                marginBottom: "1.5rem",
                padding: "1rem",
                backgroundColor: "white",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <strong style={{ fontSize: "1.1rem" }}>
                    📊 Cookies analytiques
                  </strong>
                  <p
                    style={{
                      margin: "0.5rem 0 0 0",
                      fontSize: "0.9rem",
                      color: "#666",
                    }}
                  >
                    Mesure d'audience et statistiques
                  </p>
                </div>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "0.5rem",
                      cursor: "pointer",
                      accentColor: "#2A7A73",
                    }}
                  />
                  <span style={{ fontSize: "0.9rem" }}>
                    {analyticsEnabled ? "Activé" : "Désactivé"}
                  </span>
                </label>
              </div>
            </div>

            {/* Cookies de préférence */}
            <div
              style={{
                marginBottom: "1.5rem",
                padding: "1rem",
                backgroundColor: "white",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <strong style={{ fontSize: "1.1rem" }}>
                    ⚙️ Cookies de préférence
                  </strong>
                  <p
                    style={{
                      margin: "0.5rem 0 0 0",
                      fontSize: "0.9rem",
                      color: "#666",
                    }}
                  >
                    Mémorisation de vos préférences
                  </p>
                </div>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={preferencesEnabled}
                    onChange={(e) => setPreferencesEnabled(e.target.checked)}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "0.5rem",
                      cursor: "pointer",
                      accentColor: "#2A7A73",
                    }}
                  />
                  <span style={{ fontSize: "0.9rem" }}>
                    {preferencesEnabled ? "Activé" : "Désactivé"}
                  </span>
                </label>
              </div>
            </div>

            {/* Boutons d'action */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "1.5rem",
              }}
            >
              <button
                onClick={handleSavePreferences}
                style={{
                  padding: "0.75rem 2rem",
                  backgroundColor: "#2A7A73",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "1rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#1f5c56")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#2A7A73")}
              >
                Enregistrer mes choix
              </button>
              <button
                onClick={handleAcceptAll}
                style={{
                  padding: "0.75rem 2rem",
                  backgroundColor: "white",
                  color: "#2A7A73",
                  border: "2px solid #2A7A73",
                  borderRadius: "4px",
                  fontSize: "1rem",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Tout accepter
              </button>
              <button
                onClick={handleRejectAll}
                style={{
                  padding: "0.75rem 2rem",
                  backgroundColor: "white",
                  color: "#666",
                  border: "2px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "1rem",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Tout refuser
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 : Gérer dans le navigateur */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">
          4. Gérer les cookies dans votre navigateur
        </h2>
        <div className="legal-page__section-content">
          <p>
            Vous pouvez également gérer les cookies directement depuis votre
            navigateur. Voici les liens vers les pages d'aide des principaux
            navigateurs :
          </p>
          <ul>
            <li>
              <strong>Google Chrome :</strong>{" "}
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gérer les cookies sur Chrome
              </a>
            </li>
            <li>
              <strong>Mozilla Firefox :</strong>{" "}
              <a
                href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gérer les cookies sur Firefox
              </a>
            </li>
            <li>
              <strong>Safari :</strong>{" "}
              <a
                href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gérer les cookies sur Safari
              </a>
            </li>
            <li>
              <strong>Microsoft Edge :</strong>{" "}
              <a
                href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gérer les cookies sur Edge
              </a>
            </li>
          </ul>
          <div className="legal-page__info-box legal-page__info-box--warning">
            <p>
              <strong>⚠️ Attention :</strong> La désactivation de certains
              cookies peut affecter le bon fonctionnement du site et limiter
              certaines fonctionnalités.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 : Durée de conservation */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">
          5. Durée de conservation des cookies
        </h2>
        <div className="legal-page__section-content">
          <p>
            Les cookies que nous utilisons ont des durées de conservation
            variables :
          </p>
          <ul>
            <li>
              <strong>Cookies de session :</strong> supprimés dès que vous
              fermez votre navigateur
            </li>
            <li>
              <strong>Cookies persistants :</strong> conservés de 24 heures à 13
              mois maximum
            </li>
          </ul>
          <p>
            Conformément à la réglementation, la durée maximale de conservation
            des cookies est de 13 mois.
          </p>
        </div>
      </section>

      {/* Section 6 : Plus d'informations */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">
          6. Plus d'informations sur les cookies
        </h2>
        <div className="legal-page__section-content">
          <p>
            Pour en savoir plus sur les cookies et la protection de vos données
            :
          </p>
          <ul>
            <li>
              <strong>CNIL :</strong>{" "}
              <a
                href="https://www.cnil.fr/fr/cookies-et-autres-traceurs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cookies et traceurs
              </a>
            </li>
            <li>
              <strong>Notre politique de confidentialité :</strong>{" "}
              <Link to="/politique-confidentialite">Voir la politique</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <div className="legal-page__contact">
        <h3>Des questions sur les cookies ?</h3>
        <p>
          Contactez-nous :
          <a href="mailto:info@cocobelletherapies.com">
            {" "}
            info@cocobelletherapies.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default CookiesPolicy;

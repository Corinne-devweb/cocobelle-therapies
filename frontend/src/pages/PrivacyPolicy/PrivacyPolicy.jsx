// src/pages/PrivacyPolicy/PrivacyPolicy.jsx
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <Helmet>
        <title>Politique de Confidentialité | Coco Belle Therapies</title>
        <meta
          name="description"
          content="Politique de confidentialité et protection des données personnelles RGPD. Découvrez comment vos données sont collectées et utilisées."
        />
        <meta name="robots" content="noindex, follow" />
        <link
          rel="canonical"
          href="https://cocobelle-therapies.vercel.app/politique-confidentialite"
        />
      </Helmet>
      <header className="legal-page__header">
        <h1 className="legal-page__title">Politique de Confidentialité</h1>
        <p className="legal-page__subtitle">
          Conformité RGPD - Dernière mise à jour :{" "}
          {new Date().toLocaleDateString("fr-FR")}
        </p>
      </header>

      {/* Introduction */}
      <div className="legal-page__info-box">
        <p>
          <strong>Coco Belle Therapies</strong> accorde une grande importance à
          la protection de vos données personnelles. Cette politique de
          confidentialité vous informe sur la manière dont nous collectons,
          utilisons et protégeons vos informations conformément au Règlement
          Général sur la Protection des Données (RGPD).
        </p>
      </div>

      {/* Section 1 : Responsable du traitement */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">
          1. Responsable du traitement des données
        </h2>
        <div className="legal-page__section-content">
          <p>Le responsable du traitement des données personnelles est :</p>
          <ul>
            <li>
              <strong>Nom :</strong> Annabel COULTHARD
            </li>
            <li>
              <strong>Statut :</strong> Auto-entrepreneur
            </li>
            <li>
              <strong>Adresse professionnelle :</strong> GUJAN-MESTRAS (33)
            </li>
            <li>
              <strong>Email :</strong>{" "}
              <a href="mailto:info@cocobelletherapies.com">
                info@cocobelletherapies.com
              </a>
            </li>
            <li>
              <strong>Téléphone :</strong> +33745155280
            </li>
            <li>
              <strong>SIRET :</strong> 94126336000013
            </li>
          </ul>
        </div>
      </section>

      {/* Section 2 : Données collectées */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">
          2. Données personnelles collectées
        </h2>
        <div className="legal-page__section-content">
          <p>Nous collectons les données suivantes :</p>

          <h3
            style={{
              fontSize: "1.2rem",
              marginTop: "1.5rem",
              marginBottom: "1rem",
              color: "#2A7A73",
            }}
          >
            Lors de la création d'un compte :
          </h3>
          <ul className="legal-page__checklist">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Mot de passe (chiffré)</li>
          </ul>

          <h3
            style={{
              fontSize: "1.2rem",
              marginTop: "1.5rem",
              marginBottom: "1rem",
              color: "#2A7A73",
            }}
          >
            Lors d'une prise de rendez-vous :
          </h3>
          <ul className="legal-page__checklist">
            <li>Type de service souhaité (TDAH, Hypnose, etc.)</li>
            <li>Date et heure du rendez-vous</li>
            <li>Notes ou informations complémentaires (optionnelles)</li>
          </ul>

          <h3
            style={{
              fontSize: "1.2rem",
              marginTop: "1.5rem",
              marginBottom: "1rem",
              color: "#2A7A73",
            }}
          >
            Lors de la navigation sur le site :
          </h3>
          <ul className="legal-page__checklist">
            <li>Adresse IP</li>
            <li>Type de navigateur</li>
            <li>Pages visitées</li>
            <li>Durée de visite</li>
          </ul>
        </div>
      </section>

      {/* Section 3 : Finalités */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">
          3. Finalités du traitement
        </h2>
        <div className="legal-page__section-content">
          <p>
            Vos données personnelles sont collectées et traitées pour les
            finalités suivantes :
          </p>
          <ul className="legal-page__checklist">
            <li>Gestion de votre compte client</li>
            <li>Prise de rendez-vous et gestion des consultations</li>
            <li>Communication avec vous (confirmations, rappels)</li>
            <li>Amélioration de nos services</li>
            <li>Réalisation de statistiques anonymisées</li>
            <li>Respect de nos obligations légales</li>
          </ul>
        </div>
      </section>

      {/* Section 4 : Base légale */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">
          4. Base légale du traitement
        </h2>
        <div className="legal-page__section-content">
          <p>Le traitement de vos données repose sur :</p>
          <ul>
            <li>
              <strong>L'exécution d'un contrat :</strong> gestion de votre
              compte et de vos rendez-vous
            </li>
            <li>
              <strong>L'intérêt légitime :</strong> amélioration de nos
              services, sécurité du site
            </li>
            <li>
              <strong>Votre consentement :</strong> newsletter, cookies non
              essentiels
            </li>
            <li>
              <strong>Une obligation légale :</strong> conservation des données
              comptables
            </li>
          </ul>
        </div>
      </section>

      {/* Section 5 : Durée de conservation */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">
          5. Durée de conservation des données
        </h2>
        <div className="legal-page__section-content">
          <table className="legal-page__table">
            <thead>
              <tr>
                <th>Type de données</th>
                <th>Durée de conservation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Compte client actif</td>
                <td>Pendant la durée d'utilisation + 3 ans</td>
              </tr>
              <tr>
                <td>Données de rendez-vous</td>
                <td>5 ans (obligations légales santé)</td>
              </tr>
              <tr>
                <td>Données de facturation</td>
                <td>10 ans (obligations comptables)</td>
              </tr>
              <tr>
                <td>Cookies analytiques</td>
                <td>13 mois maximum</td>
              </tr>
              <tr>
                <td>Logs de connexion</td>
                <td>12 mois</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6 : Destinataires */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">
          6. Destinataires des données
        </h2>
        <div className="legal-page__section-content">
          <p>Vos données personnelles sont destinées à :</p>
          <ul>
            <li>
              <strong>Le praticien</strong> Coco Belle Therapies (uniquement)
            </li>
            <li>
              <strong>Nos prestataires techniques</strong> (hébergement,
              maintenance du site)
            </li>
            <li>
              <strong>Les autorités compétentes</strong> en cas d'obligation
              légale
            </li>
          </ul>
          <div className="legal-page__info-box">
            <p>
              <strong>⚠️ Important :</strong> Nous ne vendons, ne louons et ne
              partageons jamais vos données personnelles avec des tiers à des
              fins commerciales ou marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 : Transfert hors UE */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">
          7. Transfert de données hors de l'Union Européenne
        </h2>
        <div className="legal-page__section-content">
          <p>
            Vos données personnelles sont hébergées et traitées au sein de
            l'Union Européenne. En cas de transfert vers un pays tiers, nous
            nous assurons que des garanties appropriées sont mises en place
            conformément au RGPD.
          </p>
        </div>
      </section>

      {/* Section 8 : Vos droits */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">
          8. Vos droits sur vos données
        </h2>
        <div className="legal-page__section-content">
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>

          <ul className="legal-page__checklist">
            <li>
              <strong>Droit d'accès :</strong> obtenir une copie de vos données
              personnelles
            </li>
            <li>
              <strong>Droit de rectification :</strong> corriger vos données
              inexactes ou incomplètes
            </li>
            <li>
              <strong>Droit à l'effacement :</strong> demander la suppression de
              vos données (« droit à l'oubli »)
            </li>
            <li>
              <strong>Droit à la limitation :</strong> limiter le traitement de
              vos données
            </li>
            <li>
              <strong>Droit à la portabilité :</strong> récupérer vos données
              dans un format structuré
            </li>
            <li>
              <strong>Droit d'opposition :</strong> vous opposer au traitement
              de vos données
            </li>
            <li>
              <strong>Droit de retirer votre consentement :</strong> à tout
              moment
            </li>
          </ul>

          <div className="legal-page__info-box legal-page__info-box--warning">
            <p>
              <strong>Pour exercer vos droits :</strong>
              <br />
              Envoyez un email à{" "}
              <a href="mailto:info@cocobelletherapies.com">
                info@cocobelletherapies.com
              </a>
              avec la copie d'une pièce d'identité. Nous vous répondrons dans un
              délai d'un mois.
            </p>
          </div>

          <p style={{ marginTop: "1.5rem" }}>
            Vous disposez également du droit d'introduire une réclamation auprès
            de la CNIL :
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              www.cnil.fr
            </a>
          </p>
        </div>
      </section>

      {/* Section 9 : Sécurité */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">9. Sécurité des données</h2>
        <div className="legal-page__section-content">
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles
            appropriées pour protéger vos données :
          </p>
          <ul className="legal-page__checklist">
            <li>Chiffrement des données sensibles (mots de passe)</li>
            <li>Protocole HTTPS pour toutes les communications</li>
            <li>Sauvegardes régulières et sécurisées</li>
            <li>Accès restreint aux données personnelles</li>
            <li>Mise à jour régulière des systèmes de sécurité</li>
            <li>Hébergement certifié et sécurisé</li>
          </ul>
        </div>
      </section>

      {/* Section 10 : Cookies */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">10. Cookies et traceurs</h2>
        <div className="legal-page__section-content">
          <p>
            Notre site utilise des cookies. Pour en savoir plus sur les cookies
            utilisés et gérer vos préférences, consultez notre{" "}
            <Link to="/gestion-cookies">page de gestion des cookies</Link>.
          </p>
        </div>
      </section>

      {/* Section 11 : Modifications */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">
          11. Modifications de la politique
        </h2>
        <div className="legal-page__section-content">
          <p>
            Nous nous réservons le droit de modifier cette politique de
            confidentialité à tout moment. Toute modification sera publiée sur
            cette page avec une date de mise à jour. Nous vous encourageons à
            consulter régulièrement cette page.
          </p>
        </div>
      </section>

      {/* Contact */}
      <div className="legal-page__contact">
        <h3>Des questions sur vos données personnelles ?</h3>
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

export default PrivacyPolicy;

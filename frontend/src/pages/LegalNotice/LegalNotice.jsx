// src/pages/LegalNotice/LegalNotice.jsx
import { Link } from "react-router-dom";

const LegalNotice = () => {
  return (
    <div className="legal-page">
      <header className="legal-page__header">
        <h1 className="legal-page__title">Mentions Légales</h1>
        <p className="legal-page__subtitle">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>
      </header>

      {/* Section 1 : Éditeur du site */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">1. Éditeur du site</h2>
        <div className="legal-page__section-content">
          <p>
            Le site <strong>Coco Belle Therapies</strong> est édité par :
          </p>
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
          <p
            style={{
              marginTop: "1rem",
              fontStyle: "italic",
              fontSize: "0.9rem",
            }}
          >
            En tant qu'auto-entrepreneur, Annabel COULTHARD est également le
            directeur de la publication.
          </p>
        </div>
      </section>

      {/* Section 2 : Hébergement */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">2. Hébergement</h2>
        <div className="legal-page__section-content">
          <p>Le site est hébergé par :</p>
          <ul>
            <li>
              <strong>Hébergeur :</strong> Vercel Inc.
            </li>
            <li>
              <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA
              91789, USA
            </li>
            <li>
              <strong>Site web :</strong>{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vercel.com
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 3 : Propriété intellectuelle */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">
          3. Propriété intellectuelle
        </h2>
        <div className="legal-page__section-content">
          <p>
            L'ensemble du contenu de ce site (textes, images, vidéos, logos,
            icônes, etc.) est la propriété exclusive de{" "}
            <strong>Coco Belle Therapies</strong> ou de ses partenaires.
          </p>
          <p>
            Toute reproduction, distribution, modification, adaptation,
            retransmission ou publication de ces différents éléments est
            strictement interdite sans l'accord écrit préalable de Coco Belle
            Therapies.
          </p>
          <div className="legal-page__info-box legal-page__info-box--warning">
            <p>
              <strong>⚠️ Attention :</strong> Toute utilisation non autorisée du
              contenu de ce site constitue une contrefaçon et est susceptible
              d'entraîner des poursuites civiles et pénales.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 : Protection des données */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">
          4. Protection des données personnelles
        </h2>
        <div className="legal-page__section-content">
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD) et à la loi Informatique et Libertés, vous disposez d'un
            droit d'accès, de rectification, de suppression et d'opposition aux
            données personnelles vous concernant.
          </p>
          <p>
            Pour plus d'informations sur la collecte et le traitement de vos
            données, consultez notre{" "}
            <Link to="/politique-confidentialite">
              Politique de confidentialité
            </Link>
            .
          </p>
          <p>
            Pour exercer vos droits, contactez-nous à :
            <a href="mailto:info@cocobelletherapies.com">
              {" "}
              info@cocobelletherapies.com
            </a>
          </p>
        </div>
      </section>

      {/* Section 5 : Cookies */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">5. Cookies</h2>
        <div className="legal-page__section-content">
          <p>
            Ce site utilise des cookies pour améliorer votre expérience de
            navigation et réaliser des statistiques de visites.
          </p>
          <p>
            Pour en savoir plus sur les cookies utilisés et gérer vos
            préférences, consultez notre{" "}
            <Link to="/gestion-cookies">page de gestion des cookies</Link>.
          </p>
        </div>
      </section>

      {/* Section 6 : Responsabilité */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">
          6. Limitation de responsabilité
        </h2>
        <div className="legal-page__section-content">
          <p>
            Coco Belle Therapies s'efforce d'assurer l'exactitude et la mise à
            jour des informations diffusées sur ce site, dont elle se réserve le
            droit de corriger le contenu à tout moment et sans préavis.
          </p>
          <p>
            Toutefois, Coco Belle Therapies ne peut garantir l'exactitude, la
            précision ou l'exhaustivité des informations mises à disposition sur
            ce site.
          </p>
          <ul className="legal-page__checklist">
            <li>
              Coco Belle Therapies décline toute responsabilité en cas
              d'interruption du site
            </li>
            <li>
              Coco Belle Therapies décline toute responsabilité en cas de
              dommages directs ou indirects
            </li>
            <li>
              Coco Belle Therapies décline toute responsabilité concernant les
              liens hypertextes
            </li>
          </ul>
          <div className="legal-page__info-box">
            <p>
              <strong>Note importante :</strong> Les informations présentes sur
              ce site ne remplacent pas une consultation médicale. En cas de
              problème de santé, consultez un professionnel de santé qualifié.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 : Liens hypertextes */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">7. Liens hypertextes</h2>
        <div className="legal-page__section-content">
          <p>
            Le site peut contenir des liens hypertextes vers d'autres sites.
            Coco Belle Therapies n'exerce aucun contrôle sur ces sites et
            décline toute responsabilité quant à leur contenu.
          </p>
          <p>
            La création de liens vers ce site est soumise à l'accord préalable
            de Coco Belle Therapies.
          </p>
        </div>
      </section>

      {/* Section 8 : Droit applicable */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">
          8. Droit applicable et juridiction
        </h2>
        <div className="legal-page__section-content">
          <p>
            Les présentes mentions légales sont régies par le droit français.
          </p>
          <p>
            En cas de litige, et à défaut d'accord amiable, les tribunaux
            français seront seuls compétents.
          </p>
        </div>
      </section>

      {/* Contact */}
      <div className="legal-page__contact">
        <h3>Une question sur nos mentions légales ?</h3>
        <p>
          N'hésitez pas à nous contacter :
          <a href="mailto:info@cocobelletherapies.com">
            {" "}
            info@cocobelletherapies.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default LegalNotice;

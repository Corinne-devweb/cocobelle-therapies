// src/components/Footer/Footer.jsx
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container container">
        {/* Section Logo */}
        <div className="footer__section footer__logo-section">
          <Link to="/" aria-label="Coco Belle Therapies - Retour à l'accueil">
            <img
              src="/logo.png"
              alt="Logo Coco Belle Therapies"
              className="footer__logo"
            />
          </Link>
        </div>

        {/* Section Liens */}
        <div className="footer__section footer__links-section">
          <nav aria-label="Navigation légale">
            <ul className="footer__links">
              <li>
                <span className="footer__copyright">
                  © {currentYear} Coco Belle Therapies
                </span>
              </li>

              <li className="footer__separator" aria-hidden="true">
                |
              </li>

              <li>
                <Link to="/mentions-legales">Mentions légales</Link>
              </li>

              <li className="footer__separator" aria-hidden="true">
                |
              </li>

              <li>
                <Link to="/plan-du-site">Plan du site</Link>
              </li>

              <li className="footer__separator" aria-hidden="true">
                |
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

              <li className="footer__separator" aria-hidden="true">
                |
              </li>

              <li>
                <Link to="/gestion-cookies">Cookies</Link>
              </li>

              <li className="footer__separator" aria-hidden="true">
                |
              </li>

              <li>
                <Link to="/politique-confidentialite">Confidentialité</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Section Réseaux Sociaux */}
        <div className="footer__section footer__social-section">
          <div className="footer__social">
            <a
              href="https://www.facebook.com/share/16bsgY6u41"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivez-nous sur Facebook"
              className="footer__social-link"
            >
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>

            <a
              href="https://www.instagram.com/coco_belle_therapies_?igsh=YWdwdzRoaDcwa214"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivez-nous sur Instagram"
              className="footer__social-link"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

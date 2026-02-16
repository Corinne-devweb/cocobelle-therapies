// src/components/Navbar/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  // Vérifier si l'utilisateur est connecté
  const checkAuth = () => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  };

  // Vérifier l'authentification au chargement ET à chaque changement de page
  useEffect(() => {
    checkAuth();
  }, [location]);

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu au clic extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Gestion du clavier (Escape pour fermer)
  const handleKeyDown = (e) => {
    if (e.key === "Escape" && menuOpen) {
      setMenuOpen(false);
    }
  };

  // Déconnexion
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setMenuOpen(false);
    window.location.href = "/connexion";
  };

  return (
    <nav
      ref={navRef}
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      role="navigation"
      aria-label="Navigation principale"
      onKeyDown={handleKeyDown}
    >
      <div className="navbar__container container">
        {/* Logo */}
        <Link
          to="/"
          className="navbar__logo"
          aria-label="Coco Belle Therapies - Retour à l'accueil"
        >
          <img
            src="/logo.png"
            alt="Logo Coco Belle Therapies"
            className="navbar__logo-img"
          />
        </Link>

        {/* Menu burger - Mobile */}
        <button
          className="navbar__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          type="button"
        >
          <span className="navbar__burger-line"></span>
          <span className="navbar__burger-line"></span>
          <span className="navbar__burger-line"></span>
          <span className="visually-hidden">Menu</span>
        </button>

        {/* Menu navigation */}
        <ul
          id="navbar-menu"
          className={`navbar__menu ${menuOpen ? "navbar__menu--open" : ""}`}
          role="menubar"
        >
          <li role="none">
            <NavLink
              to="/"
              role="menuitem"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Accueil
            </NavLink>
          </li>

          <li role="none">
            <NavLink
              to="/qui-suis-je"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              Qui suis-je
            </NavLink>
          </li>

          <li role="none">
            <NavLink
              to="/mes-approches"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              Mes approches
            </NavLink>
          </li>

          <li role="none">
            <NavLink
              to="/tdah"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              TDAH
            </NavLink>
          </li>

          <li role="none">
            <NavLink
              to="/hypnose"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              Hypnose
            </NavLink>
          </li>

          <li role="none">
            <NavLink
              to="/contact"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>

          <li role="none" className="navbar__menu-mobile-only">
            <NavLink
              to="/rendez-vous"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              Prendre RDV
            </NavLink>
          </li>

          <li role="none" className="navbar__menu-mobile-only">
            <NavLink
              to="/mon-compte"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              Mon Compte
            </NavLink>
          </li>
        </ul>

        {/* CTA */}
        <div className="navbar__actions">
          <Link
            to="/rendez-vous"
            className="navbar__cta"
            aria-label="Prendre rendez-vous avec un thérapeute"
          >
            Prendre RDV
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                to="/mon-compte"
                className="navbar__account"
                aria-label="Accéder à mon compte"
              >
                <i className="fas fa-user" aria-hidden="true"></i>
                <span className="visually-hidden">Mon compte</span>
              </Link>

              <button
                onClick={handleLogout}
                className="navbar__logout"
                aria-label="Se déconnecter"
                title="Déconnexion"
              >
                <i className="fas fa-sign-out-alt" aria-hidden="true"></i>
              </button>
            </>
          ) : (
            <Link
              to="/connexion"
              className="navbar__account"
              aria-label="Se connecter"
            >
              <i className="fas fa-user" aria-hidden="true"></i>
              <span className="visually-hidden">Connexion</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

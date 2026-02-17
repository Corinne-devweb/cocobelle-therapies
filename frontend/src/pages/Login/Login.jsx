// src/pages/Login/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authAPI } from "../../services/api";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (loginError) {
      setLoginError("");
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email invalide";
    }

    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 6 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setLoginError("");

    try {
      const response = await authAPI.login({
        email: formData.email,
        password: formData.password,
      });

      const { token, user } = response.data;

      // Sauvegarder dans localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isLoggedIn", "true");

      console.log("✅ Connexion réussie:", user);

      // Redirection vers Mon Compte
      navigate("/mon-compte");
    } catch (error) {
      console.error("❌ Erreur de connexion:", error);

      if (error.response) {
        setLoginError(
          error.response.data.message || "Email ou mot de passe incorrect",
        );
      } else if (error.request) {
        setLoginError(
          "Impossible de contacter le serveur. Vérifiez votre connexion.",
        );
      } else {
        setLoginError("Une erreur est survenue. Veuillez réessayer.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login">
      <section className="login-hero">
        <div className="login-hero__overlay"></div>
        <div className="container">
          <div className="login-hero__content">
            <h1 className="login-hero__title">Connexion</h1>
            <p className="login-hero__subtitle">
              Accédez à votre espace personnel
            </p>
          </div>
        </div>
      </section>

      <section className="login-form-section">
        <div className="container">
          <div className="login-container">
            <div className="login-box">
              <div className="login-box__header">
                <h2>Bienvenue</h2>
                <p>Connectez-vous pour accéder à votre compte</p>
              </div>

              {loginError && (
                <div className="alert alert--error">
                  <span className="alert__icon">⚠️</span>
                  <span>{loginError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? "form-input--error" : ""}`}
                    placeholder="votre.email@exemple.com"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <span className="form-error">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Mot de passe <span className="required">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`form-input ${errors.password ? "form-input--error" : ""}`}
                    placeholder="••••••••"
                    autoComplete="current-password"
                  />
                  {errors.password && (
                    <span className="form-error">{errors.password}</span>
                  )}
                </div>

                <div className="form-options">
                  <label className="form-checkbox">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="form-checkbox__input"
                    />
                    <span className="form-checkbox__label">
                      Se souvenir de moi
                    </span>
                  </label>
                  <Link to="/mot-de-passe-oublie" className="forgot-password">
                    Mot de passe oublié ?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="btn btn--primary btn--large btn--block"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Connexion en cours...
                    </>
                  ) : (
                    "Se connecter"
                  )}
                </button>
              </form>

              <div className="login-box__footer">
                <p>
                  Pas encore de compte ?{" "}
                  <Link to="/inscription" className="link">
                    Créer un compte
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

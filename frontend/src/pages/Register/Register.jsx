// src/pages/Register/Register.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authAPI } from "../../services/api";
import "./Register.scss";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registerError, setRegisterError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (registerError) {
      setRegisterError("");
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email invalide";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est requis";
    }

    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 6 caractères";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Veuillez confirmer votre mot de passe";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }

    if (!formData.consent) {
      newErrors.consent = "Vous devez accepter la politique de confidentialité";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setRegisterError("");

    try {
      // Appel à l'API backend
      const response = await authAPI.register({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
      });

      // Récupérer le token et les données utilisateur
      const { token, user } = response.data;

      // Sauvegarder dans localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isLoggedIn", "true");

      // Message de succès (optionnel)
      console.log("✅ Inscription réussie:", user);

      // Redirection vers Mon Compte
      navigate("/mon-compte");
    } catch (error) {
      console.error("❌ Erreur d'inscription:", error);

      // Gérer les différents types d'erreurs
      if (error.response) {
        // Erreur venant du serveur
        setRegisterError(
          error.response.data.message ||
            "Une erreur est survenue lors de l'inscription",
        );
      } else if (error.request) {
        // Pas de réponse du serveur
        setRegisterError(
          "Impossible de contacter le serveur. Vérifiez votre connexion.",
        );
      } else {
        // Autre erreur
        setRegisterError("Une erreur est survenue. Veuillez réessayer.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register">
      {/* Hero Section */}
      <section className="register-hero">
        <div className="register-hero__overlay"></div>
        <div className="container">
          <div className="register-hero__content">
            <h1 className="register-hero__title">Inscription</h1>
            <p className="register-hero__subtitle">
              Créez votre compte patient
            </p>
          </div>
        </div>
      </section>

      {/* Register Form */}
      <section className="register-form-section">
        <div className="container">
          <div className="register-container">
            <div className="register-box">
              <div className="register-box__header">
                <h2>Créer un compte</h2>
                <p>Remplissez le formulaire pour commencer</p>
              </div>

              {registerError && (
                <div className="alert alert--error">
                  <span className="alert__icon">⚠️</span>
                  <span>{registerError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="register-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">
                      Prénom <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`form-input ${
                        errors.firstName ? "form-input--error" : ""
                      }`}
                      placeholder="Votre prénom"
                    />
                    {errors.firstName && (
                      <span className="form-error">{errors.firstName}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">
                      Nom <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`form-input ${
                        errors.lastName ? "form-input--error" : ""
                      }`}
                      placeholder="Votre nom"
                    />
                    {errors.lastName && (
                      <span className="form-error">{errors.lastName}</span>
                    )}
                  </div>
                </div>

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
                    className={`form-input ${
                      errors.email ? "form-input--error" : ""
                    }`}
                    placeholder="votre.email@exemple.com"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <span className="form-error">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Téléphone <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-input ${
                      errors.phone ? "form-input--error" : ""
                    }`}
                    placeholder="+33 6 12 34 56 78"
                  />
                  {errors.phone && (
                    <span className="form-error">{errors.phone}</span>
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
                    className={`form-input ${
                      errors.password ? "form-input--error" : ""
                    }`}
                    placeholder="••••••••"
                    autoComplete="new-password"
                  />
                  {errors.password && (
                    <span className="form-error">{errors.password}</span>
                  )}
                  <p className="form-hint">Minimum 6 caractères</p>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirmer le mot de passe{" "}
                    <span className="required">*</span>
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`form-input ${
                      errors.confirmPassword ? "form-input--error" : ""
                    }`}
                    placeholder="••••••••"
                    autoComplete="new-password"
                  />
                  {errors.confirmPassword && (
                    <span className="form-error">{errors.confirmPassword}</span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-checkbox">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="form-checkbox__input"
                    />
                    <span className="form-checkbox__label">
                      J'accepte la{" "}
                      <Link to="/politique-confidentialite" target="_blank">
                        politique de confidentialité
                      </Link>{" "}
                      <span className="required">*</span>
                    </span>
                  </label>
                  {errors.consent && (
                    <span className="form-error">{errors.consent}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn--primary btn--large btn--block"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Création en cours...
                    </>
                  ) : (
                    "Créer mon compte"
                  )}
                </button>
              </form>

              <div className="register-box__footer">
                <p>
                  Vous avez déjà un compte ?{" "}
                  <Link to="/connexion" className="link">
                    Se connecter
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

export default Register;

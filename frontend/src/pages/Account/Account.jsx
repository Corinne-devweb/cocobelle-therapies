// src/pages/Account/Account.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { appointmentsAPI } from "../../services/api";
import "./Account.scss";

const Account = () => {
  const [activeTab, setActiveTab] = useState("appointments");
  const [messageForm, setMessageForm] = useState({
    subject: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);
  const [user, setUser] = useState(null);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);
  const [loadingAppointments, setLoadingAppointments] = useState(true);

  // Récupérer les infos utilisateur depuis localStorage
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn && userData) {
      const nameParts = userData.name
        ? userData.name.split(" ")
        : ["Utilisateur"];
      const firstName = nameParts[0] || "Utilisateur";
      const lastName = nameParts.slice(1).join(" ") || "";

      setUser({
        firstName: firstName,
        lastName: lastName,
        fullName: userData.name || "Utilisateur",
        email: userData.email || "",
        role: userData.role || "user",
        memberSince: new Date(
          userData.createdAt || Date.now(),
        ).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      });
    }
  }, []);

  // Récupérer les rendez-vous depuis le backend
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await appointmentsAPI.getUserAppointments();
        setUpcomingAppointments(response.data.upcoming || []);
        setPastAppointments(response.data.past || []);
      } catch (error) {
        console.error("❌ Erreur récupération RDV:", error);
      } finally {
        setLoadingAppointments(false);
      }
    };

    fetchAppointments();
  }, []);

  // Annuler un rendez-vous
  const handleCancelAppointment = async (id) => {
    if (
      !window.confirm("Êtes-vous sûr(e) de vouloir annuler ce rendez-vous ?")
    ) {
      return;
    }

    try {
      await appointmentsAPI.cancel(id);
      // Recharger les rendez-vous
      const response = await appointmentsAPI.getUserAppointments();
      setUpcomingAppointments(response.data.upcoming || []);
      setPastAppointments(response.data.past || []);
      alert("Rendez-vous annulé avec succès !");
    } catch (error) {
      console.error("❌ Erreur annulation RDV:", error);
      alert("Erreur lors de l'annulation du rendez-vous");
    }
  };

  // Formater la date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Formater l'heure
  const formatTime = (time) => {
    return time ? time.slice(0, 5) : ""; // "14:30:00" -> "14:30"
  };

  // Badge de statut
  const getStatusBadge = (status) => {
    const badges = {
      pending: { text: "En attente", class: "badge--pending" },
      confirmed: { text: "Confirmé", class: "badge--confirmed" },
      completed: { text: "Terminé", class: "badge--completed" },
      cancelled: { text: "Annulé", class: "badge--cancelled" },
    };
    return badges[status] || badges.pending;
  };

  const handleMessageChange = (e) => {
    const { name, value } = e.target;
    setMessageForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setMessageSent(true);
    setMessageForm({ subject: "", message: "" });
    setTimeout(() => {
      setMessageSent(false);
    }, 5000);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  if (!user) {
    return (
      <div className="account">
        <section className="account-content">
          <div
            className="container"
            style={{ textAlign: "center", padding: "3rem" }}
          >
            <p>Chargement...</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="account">
      {/* Hero Section */}
      <section className="account-hero">
        <div className="account-hero__overlay"></div>
        <div className="container">
          <div className="account-hero__content">
            <h1 className="account-hero__title">Mon Compte</h1>
            <p className="account-hero__subtitle">
              Bienvenue {user.firstName} !
            </p>
          </div>
        </div>
      </section>

      {/* Account Content */}
      <section className="account-content">
        <div className="container">
          <div className="account-layout">
            {/* Sidebar */}
            <aside className="account-sidebar">
              <div className="user-card">
                <div className="user-card__avatar">
                  {user.firstName.charAt(0).toUpperCase()}
                  {user.lastName ? user.lastName.charAt(0).toUpperCase() : ""}
                </div>
                <h3 className="user-card__name">{user.fullName}</h3>
                <p className="user-card__email">{user.email}</p>
                {user.role === "admin" && (
                  <span className="user-card__badge">👑 Administrateur</span>
                )}
                <p className="user-card__info">
                  <span className="user-card__icon">📅</span>
                  Membre depuis {user.memberSince}
                </p>
              </div>

              <nav className="account-nav">
                <button
                  className={`account-nav__item ${
                    activeTab === "appointments" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("appointments")}
                >
                  <span className="account-nav__icon">📅</span>
                  <span>Mes rendez-vous</span>
                </button>
                <button
                  className={`account-nav__item ${
                    activeTab === "contact" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("contact")}
                >
                  <span className="account-nav__icon">💬</span>
                  <span>Contacter</span>
                </button>
              </nav>

              <div className="sidebar-actions">
                {user.role === "admin" && (
                  <Link to="/admin" className="btn btn--primary btn--block">
                    👑 Administration
                  </Link>
                )}
                <Link to="/rendez-vous" className="btn btn--primary btn--block">
                  Nouveau rendez-vous
                </Link>
                <button
                  className="btn btn--outline btn--block"
                  onClick={handleLogout}
                >
                  Déconnexion
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <main className="account-main">
              {/* Tab: Appointments */}
              {activeTab === "appointments" && (
                <div className="appointments-section">
                  <h2 className="section-title">Mes rendez-vous</h2>

                  {loadingAppointments ? (
                    <p style={{ textAlign: "center", padding: "2rem" }}>
                      Chargement des rendez-vous...
                    </p>
                  ) : (
                    <>
                      {/* Rendez-vous à venir */}
                      <div className="appointments-group">
                        <h3 className="appointments-group__title">
                          <span className="appointments-group__icon">📅</span>
                          Rendez-vous à venir ({upcomingAppointments.length})
                        </h3>

                        {upcomingAppointments.length === 0 ? (
                          <div className="empty-state">
                            <p>Vous n&apos;avez aucun rendez-vous à venir.</p>
                            <Link
                              to="/rendez-vous"
                              className="btn btn--primary"
                            >
                              Prendre rendez-vous
                            </Link>
                          </div>
                        ) : (
                          <div className="appointments-list">
                            {upcomingAppointments.map((apt) => (
                              <div key={apt.id} className="appointment-card">
                                <div className="appointment-card__header">
                                  <span className="appointment-card__service">
                                    {apt.serviceType}
                                  </span>
                                  <span
                                    className={`appointment-card__badge ${getStatusBadge(apt.status).class}`}
                                  >
                                    {getStatusBadge(apt.status).text}
                                  </span>
                                </div>
                                <div className="appointment-card__details">
                                  <p>📆 {formatDate(apt.appointmentDate)}</p>
                                  <p>⏰ {formatTime(apt.appointmentTime)}</p>
                                  <p>⏱️ Durée : {apt.duration} minutes</p>
                                  {apt.notes && (
                                    <p className="appointment-card__notes">
                                      📝 {apt.notes}
                                    </p>
                                  )}
                                </div>
                                {apt.status !== "cancelled" && (
                                  <button
                                    onClick={() =>
                                      handleCancelAppointment(apt.id)
                                    }
                                    className="btn btn--danger btn--small"
                                  >
                                    Annuler
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Rendez-vous passés */}
                      <div className="appointments-group">
                        <h3 className="appointments-group__title">
                          <span className="appointments-group__icon">✓</span>
                          Rendez-vous passés ({pastAppointments.length})
                        </h3>

                        {pastAppointments.length === 0 ? (
                          <div className="empty-state">
                            <p>Aucun rendez-vous passé.</p>
                          </div>
                        ) : (
                          <div className="appointments-list">
                            {pastAppointments.map((apt) => (
                              <div
                                key={apt.id}
                                className="appointment-card appointment-card--past"
                              >
                                <div className="appointment-card__header">
                                  <span className="appointment-card__service">
                                    {apt.serviceType}
                                  </span>
                                  <span
                                    className={`appointment-card__badge ${getStatusBadge(apt.status).class}`}
                                  >
                                    {getStatusBadge(apt.status).text}
                                  </span>
                                </div>
                                <div className="appointment-card__details">
                                  <p>📆 {formatDate(apt.appointmentDate)}</p>
                                  <p>⏰ {formatTime(apt.appointmentTime)}</p>
                                  <p>⏱️ Durée : {apt.duration} minutes</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Tab: Contact */}
              {activeTab === "contact" && (
                <div className="contact-section">
                  <h2 className="section-title">
                    Contacter Coco Belle Therapies
                  </h2>

                  <div className="contact-info-cards">
                    <div className="contact-info-card">
                      <div className="contact-info-card__icon">📧</div>
                      <h3>Email</h3>
                      <p>info@cocobelletherapies.com</p>
                      <p className="contact-info-card__note">
                        Réponse sous 24-48h
                      </p>
                    </div>
                    <div className="contact-info-card">
                      <div className="contact-info-card__icon">📱</div>
                      <h3>WhatsApp</h3>
                      <p>+44 7801 766737</p>
                      <a
                        href="https://wa.me/447801766737"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--outline btn--small"
                      >
                        Ouvrir WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="message-form-container">
                    <h3>Envoyer un message</h3>

                    {messageSent && (
                      <div className="alert alert--success">
                        <span className="alert__icon">✓</span>
                        <span>Votre message a été envoyé avec succès !</span>
                      </div>
                    )}

                    <form
                      onSubmit={handleMessageSubmit}
                      className="message-form"
                    >
                      <div className="form-group">
                        <label htmlFor="subject" className="form-label">
                          Sujet <span className="required">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={messageForm.subject}
                          onChange={handleMessageChange}
                          className="form-input"
                          required
                        >
                          <option value="">Choisissez un sujet</option>
                          <option value="appointment">
                            Question sur un rendez-vous
                          </option>
                          <option value="payment">
                            Question sur le paiement
                          </option>
                          <option value="other">Autre question</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="message" className="form-label">
                          Message <span className="required">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={messageForm.message}
                          onChange={handleMessageChange}
                          className="form-textarea"
                          rows="6"
                          placeholder="Écrivez votre message ici..."
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="btn btn--primary btn--large"
                      >
                        Envoyer le message
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;

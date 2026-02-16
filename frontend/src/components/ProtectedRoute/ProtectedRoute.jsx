// src/components/ProtectedRoute/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  // Vérifier si l'utilisateur est connecté
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Récupérer les informations utilisateur
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const isAdmin = user.role === "admin";

  // Si non connecté, rediriger vers la page de connexion
  if (!isLoggedIn) {
    return <Navigate to="/connexion" replace />;
  }

  // Si la route nécessite les droits admin et que l'utilisateur n'est pas admin
  if (requireAdmin && !isAdmin) {
    return (
      <div
        style={{
          padding: "3rem 1rem",
          minHeight: "70vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            color: "#e74c3c",
            marginBottom: "1rem",
          }}
        >
          🚫 Accès refusé
        </h1>

        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Vous n&apos;avez pas les droits d&apos;administrateur pour accéder à
          cette page.
        </p>

        <a
          href="/"
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#2A7A73",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            fontWeight: "500",
          }}
        >
          Retour à l&apos;accueil
        </a>
      </div>
    );
  }

  // Si connecté et autorisé, afficher la page
  return children;
};

export default ProtectedRoute;

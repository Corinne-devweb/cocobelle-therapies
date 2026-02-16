// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Approaches from "./pages/Approaches/Approaches";
import ADHD from "./pages/ADHD/ADHD";
import Hypnotherapy from "./pages/Hypnotherapy/Hypnotherapy";
import Booking from "./pages/Booking/Booking";
import Account from "./pages/Account/Account";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Contact from "./pages/Contact/Contact";
import LegalNotice from "./pages/LegalNotice/LegalNotice";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy/CookiesPolicy";
import Sitemap from "./pages/Sitemap/Sitemap";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Skip link pour accessibilité */}
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>

        {/* Navbar */}
        <Navbar />

        {/* Contenu principal */}
        <main id="main-content" className="main-content">
          <Routes>
            {/* Page d'accueil */}
            <Route path="/" element={<Home />} />

            {/* Page Qui suis-je */}
            <Route path="/qui-suis-je" element={<About />} />

            {/* Page Mes approches */}
            <Route path="/mes-approches" element={<Approaches />} />

            {/* Page TDAH */}
            <Route path="/tdah" element={<ADHD />} />

            {/* Page Hypnose */}
            <Route path="/hypnose" element={<Hypnotherapy />} />

            {/* Page Rendez-vous */}
            <Route path="/rendez-vous" element={<Booking />} />

            {/* Page Mon Compte - PROTÉGÉE */}
            <Route
              path="/mon-compte"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />

            {/* Page Connexion */}
            <Route path="/connexion" element={<Login />} />

            {/* Page Inscription */}
            <Route path="/inscription" element={<Register />} />

            {/* Page Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* Page Mot de passe oublié - Temporaire */}
            <Route
              path="/mot-de-passe-oublie"
              element={
                <div style={{ padding: "3rem 1rem", minHeight: "70vh" }}>
                  <div
                    className="container"
                    style={{
                      maxWidth: "600px",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                  >
                    <h1 style={{ color: "#2A7A73", marginBottom: "1rem" }}>
                      Mot de passe oublié
                    </h1>
                    <p style={{ marginBottom: "2rem" }}>
                      Cette fonctionnalité sera bientôt disponible.
                    </p>
                    <p style={{ marginBottom: "2rem" }}>
                      En attendant, vous pouvez me contacter directement :
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        alignItems: "center",
                      }}
                    >
                      <a
                        href="mailto:info@cocobelletherapies.com"
                        style={{
                          padding: "0.75rem 1.5rem",
                          backgroundColor: "#2A7A73",
                          color: "white",
                          textDecoration: "none",
                          borderRadius: "4px",
                          display: "inline-block",
                        }}
                      >
                        ? info@cocobelletherapies.com
                      </a>

                      <a
                        href="https://wa.me/447801766737"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: "0.75rem 1.5rem",
                          backgroundColor: "#25D366",
                          color: "white",
                          textDecoration: "none",
                          borderRadius: "4px",
                          display: "inline-block",
                        }}
                      >
                        ? WhatsApp : +44 7801 766737
                      </a>

                      <a
                        href="/connexion"
                        style={{
                          marginTop: "1rem",
                          color: "#2A7A73",
                          textDecoration: "underline",
                        }}
                      >
                        ← Retour à la connexion
                      </a>
                    </div>
                  </div>
                </div>
              }
            />

            {/* Pages légales */}
            <Route path="/mentions-legales" element={<LegalNotice />} />
            <Route
              path="/politique-confidentialite"
              element={<PrivacyPolicy />}
            />
            <Route path="/gestion-cookies" element={<CookiesPolicy />} />
            <Route path="/plan-du-site" element={<Sitemap />} />

            {/* Page 404 */}
            <Route
              path="*"
              element={
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
                  <h1 style={{ fontSize: "4rem", color: "#2A7A73" }}>404</h1>
                  <h2>Page non trouvée</h2>
                  <p style={{ marginTop: "1rem" }}>
                    Désolé, la page que vous recherchez n&apos;existe pas.
                  </p>

                  <a
                    href="/"
                    style={{
                      marginTop: "2rem",
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
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

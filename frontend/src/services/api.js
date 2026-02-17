// src/services/api.js
import axios from "axios";

// URL de base du backend
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Instance Axios avec configuration par défaut
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercepteur pour ajouter le token automatiquement
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Intercepteur pour gérer les erreurs globalement
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Si token expiré ou invalide
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn");
      window.location.href = "/connexion";
    }
    return Promise.reject(error);
  },
);

// ===== AUTHENTIFICATION =====
export const authAPI = {
  register: (userData) => api.post("/auth/register", userData),
  login: (credentials) => api.post("/auth/login", credentials),
  getMe: () => api.get("/auth/me"),
};

// ===== RENDEZ-VOUS =====
export const appointmentsAPI = {
  create: (appointmentData) => api.post("/appointments", appointmentData),
  getUserAppointments: () => api.get("/appointments/user"),
  getOne: (id) => api.get(`/appointments/${id}`),
  update: (id, data) => api.put(`/appointments/${id}`, data),
  cancel: (id) => api.delete(`/appointments/${id}`),
};

// ===== CONTACT =====
export const contactAPI = {
  sendMessage: (messageData) => api.post("/contact", messageData),
  getMessages: () => api.get("/contact"),
};

export default api;

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

// ===== AUTHENTIFICATION =====
export const authAPI = {
  register: (userData) => api.post("/auth/register", userData),
  login: (credentials) => api.post("/auth/login", credentials),
  getMe: () => api.get("/auth/me"),
};

// ===== BLOG =====
export const blogAPI = {
  getArticles: (params) => api.get("/blog/articles", { params }),
  getArticle: (id) => api.get(`/blog/articles/${id}`),
  createArticle: (articleData) => api.post("/blog/articles", articleData),
  updateArticle: (id, articleData) =>
    api.put(`/blog/articles/${id}`, articleData),
  deleteArticle: (id) => api.delete(`/blog/articles/${id}`),
};

// ===== CONTACT =====
export const contactAPI = {
  sendMessage: (messageData) => api.post("/contact", messageData),
  getMessages: () => api.get("/contact"),
};

export default api;

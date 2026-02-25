// backend/middleware/validation.js

// ===== VALIDATION CONTACT =====
const validateContact = (req, res, next) => {
  const { name, email, message } = req.body;
  const errors = [];

  // Vérifier le nom
  if (!name || name.trim() === "") {
    errors.push("Le nom est obligatoire");
  }

  // Vérifier l'email
  if (!email || email.trim() === "") {
    errors.push("L'email est obligatoire");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push("L'email n'est pas valide");
    }
  }

  // Vérifier le message
  if (!message || message.trim() === "") {
    errors.push("Le message est obligatoire");
  } else if (message.trim().length < 10) {
    errors.push("Le message doit contenir au moins 10 caractères");
  }

  // S'il y a des erreurs, renvoyer une réponse d'erreur
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Données invalides",
      errors,
    });
  }

  // Sinon next
  next();
};

// ===== VALIDATION INSCRIPTION =====
const validateRegister = (req, res, next) => {
  const { name, email, password } = req.body;
  const errors = [];

  // Vérifier le nom
  if (!name || name.trim() === "") {
    errors.push("Le nom est obligatoire");
  }

  // Vérifier l'email
  if (!email || email.trim() === "") {
    errors.push("L'email est obligatoire");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push("L'email n'est pas valide");
    }
  }

  // Vérifier le mot de passe
  if (!password) {
    errors.push("Le mot de passe est obligatoire");
  } else if (password.length < 6) {
    errors.push("Le mot de passe doit contenir au moins 6 caractères");
  }

  // S'il y a des erreurs, renvoyer une réponse d'erreur
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Données invalides",
      errors,
    });
  }

  // Sinon next
  next();
};

// ===== VALIDATION CONNEXION =====
const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  // Vérifier l'email
  if (!email || email.trim() === "") {
    errors.push("L'email est obligatoire");
  }

  // Vérifier le mot de passe
  if (!password) {
    errors.push("Le mot de passe est obligatoire");
  }

  // S'il y a des erreurs, renvoyer réponse d'erreur
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Données invalides",
      errors,
    });
  }

  // Sinon next
  next();
};

// ===== VALIDATION RENDEZ-VOUS =====
const validateAppointment = (req, res, next) => {
  const { serviceType, appointmentDate, appointmentTime } = req.body;
  const errors = [];

  // Vérifier le type de service
  const validServices = ["TDAH", "Hypnose", "Consultation gratuite"];
  if (!serviceType || !validServices.includes(serviceType)) {
    errors.push("Le type de service est invalide");
  }

  // Vérifier la date
  if (!appointmentDate) {
    errors.push("La date du rendez-vous est obligatoire");
  } else {
    const today = new Date().toISOString().split("T")[0];
    if (appointmentDate < today) {
      errors.push("La date du rendez-vous ne peut pas être dans le passé");
    }
  }

  // Vérifier l'heure
  if (!appointmentTime) {
    errors.push("L'heure du rendez-vous est obligatoire");
  }

  // S'il y a des erreurs, renvoyer une réponse d'erreur
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Données invalides",
      errors,
    });
  }

  // Sinon next
  next();
};

module.exports = {
  validateContact,
  validateRegister,
  validateLogin,
  validateAppointment,
};

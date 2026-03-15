# Coco Belle Therapies

Site web professionnel pour l'accompagnement thérapeutique du TDAH et l'hypnothérapie clinique.

**Site en ligne :** [https://cocobelle-therapies.vercel.app](https://cocobelle-therapies.vercel.app)

---

## Table des matières

- [À propos](#à-propos)
- [Technologies utilisées](#technologies-utilisées)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Configuration](#configuration)
- [Déploiement](#déploiement)
- [Structure du projet](#structure-du-projet)
- [API Documentation](#api-documentation)

---

## À propos

**Coco Belle Therapies** est une plateforme web complète offrant :

- Thérapie d'Acceptation et d'Engagement (ACT) pour le TDAH
- Hypnothérapie clinique basée sur la pleine conscience
- Prise de rendez-vous en ligne possible

---

## Technologies utilisées

### **Frontend**

- **React 19** - Framework JavaScript
- **React Router** - Navigation
- **Vite** - Build tool
- **SCSS** - Styling
- **React Helmet Async** - SEO meta tags
- **Axios** - Requêtes HTTP

### **Backend**

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Sequelize** - ORM pour PostgreSQL
- **PostgreSQL** - Base de données
- **JWT** - Authentification
- **Bcrypt** - Hashage des mots de passe
- **Resend** - Service d'envoi d'emails

### **Déploiement**

- **Vercel** - Hébergement frontend
- **Render** - Hébergement backend + base de données
- **Cal.com** - Système de réservation (calendrier)

---

## Fonctionnalités

### **Pour les visiteurs**

- ✅ Navigation responsive sur toutes les pages
- ✅ Formulaire de contact avec envoi d'emails
- ✅ Prise de rendez-vous via Cal.com (sans compte requis)
- ✅ SEO optimisé (meta tags, Open Graph)

### **Pour les utilisateurs inscrits**

- ✅ Création de compte et connexion sécurisée (JWT)
- ✅ Tableau de bord "Mon Compte"
- ✅ Visualisation des rendez-vous à venir et passés
- ✅ Annulation de rendez-vous
- ✅ Synchronisation automatique des RDV Cal.com

### **Pour l'administrateur**

- ✅ Webhook Cal.com pour synchronisation automatique
- ✅ Notifications email (Resend)

---

## Installation

### **Prérequis**

- Node.js 18+ et npm
- PostgreSQL 14+
- Compte Resend (pour les emails)
- Compte Cal.com (pour les réservations)

### **1. Cloner le projet**

```bash
git clone https://github.com/Corinne-devweb/cocobelle-therapies.git
cd cocobelle-therapies
```

### **2. Installer les dépendances**

**Frontend :**

```bash
cd frontend
npm install
```

**Backend :**

```bash
cd backend
npm install
```

---

## Configuration

### **Frontend - Variables d'environnement**

Créez un fichier `.env` dans `frontend/` :

```env
VITE_API_URL=http://localhost:5000/api
```

### **Backend - Variables d'environnement**

Créez un fichier `.env` dans `backend/` :

```env
# Base de données PostgreSQL (Local)
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=votre_mot_de_passe
DB_NAME=cocobelle_therapies
DB_PORT=5432

# JWT
JWT_SECRET=votre_secret_jwt_tres_long_et_securise

# Emails (Resend)
RESEND_API_KEY=re_votre_cle_api_resend
EMAIL_FROM=onboarding@resend.dev
EMAIL_TO=info@cocobelletherapies.com

# Serveur
PORT=5000
NODE_ENV=development
```

**Note :** En production (Render), la variable `DATABASE_URL` est fournie automatiquement par le service PostgreSQL de Render.

---

## Déploiement

### **Frontend (Vercel)**

Le frontend est déployé automatiquement sur Vercel à chaque `git push` sur la branche `main`.

**URL de production :** https://cocobelle-therapies.vercel.app

**Variables d'environnement Vercel :**

```
VITE_API_URL=https://cocobelle-therapies.onrender.com/api
```

### **Backend (Render)**

Le backend est déployé sur Render avec auto-déploiement depuis GitHub.

**URL de production :** https://cocobelle-therapies.onrender.com

**Variables d'environnement Render :**

- `DATABASE_URL` - Fourni automatiquement par Render PostgreSQL
- `JWT_SECRET` - Secret pour JWT
- `RESEND_API_KEY` - Clé API Resend
- `EMAIL_FROM` - Email d'envoi
- `EMAIL_TO` - Email de réception
- `NODE_ENV` - production

### **Base de données (Render PostgreSQL)**

Base de données PostgreSQL hébergée sur Render avec connexion automatique.

---

## Structure du projet

```
cocobelle-therapies/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   ├── Footer/
│   │   │   └── ProtectedRoute/
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── About/
│   │   │   ├── ADHD/
│   │   │   ├── Hypnotherapy/
│   │   │   ├── Booking/
│   │   │   ├── Contact/
│   │   │   ├── Account/
│   │   │   ├── Login/
│   │   │   └── Register/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   │   ├── database.js
│   │   └── email.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── validation.js
│   ├── models/
│   │   ├── User.js
│   │   └── Appointment.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── appointments.js
│   │   ├── contact.js
│   │   └── webhook.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## API Documentation

### **Base URL**

- **Production :** `https://cocobelle-therapies.onrender.com/api`
- **Development :** `http://localhost:5000/api`

### **Endpoints**

#### **Authentification**

```
POST /auth/register     - Créer un compte
POST /auth/login        - Se connecter
GET  /auth/me          - Obtenir l'utilisateur connecté
```

#### **Rendez-vous** (Authentification requise)

```
POST   /appointments           - Créer un RDV
GET    /appointments/user      - Obtenir tous les RDV de l'utilisateur
GET    /appointments/:id       - Obtenir un RDV spécifique
PUT    /appointments/:id       - Modifier un RDV
DELETE /appointments/:id       - Annuler un RDV
```

#### **Contact**

```
POST /contact         - Envoyer un message de contact
```

#### **Webhook**

```
POST /webhook/cal     - Webhook Cal.com (automatique)
```

---

## Sécurité

- ✅ Authentification JWT
- ✅ Mots de passe hashés avec Bcrypt
- ✅ Protection CSRF
- ✅ Rate limiting
- ✅ Helmet.js pour headers sécurisés
- ✅ Variables d'environnement pour données sensibles
- ✅ Trust proxy configuré pour Render

---

## Configuration des emails

Le projet utilise **Resend** pour l'envoi d'emails rapides et fiables.

**Fonctionnalités email :**

- ✅ Email de notification à la thérapeute (nouveau contact)
- ✅ Email de confirmation au visiteur
- ✅ Templates HTML personnalisés

---

## Intégration Cal.com

Le système de réservation utilise **Cal.com** avec webhook pour synchronisation automatique.

**Configuration webhook Cal.com :**

- URL : `https://cocobelle-therapies.onrender.com/api/webhook/cal`
- Événement : `BOOKING_CREATED`

**Fonctionnement :**

1. Utilisateur réserve sur Cal.com
2. Webhook envoyé au backend
3. Backend cherche l'utilisateur par email
4. RDV créé dans la base de données
5. RDV visible dans "Mon Compte"

---

## SEO et Meta Tags

Le site est optimisé pour le référencement avec :

- ✅ Meta descriptions personnalisées par page
- ✅ Meta keywords
- ✅ Open Graph tags (Facebook, WhatsApp)
- ✅ Canonical URLs
- ✅ React Helmet Async

---

## Auteurs

**Développement :** Corinne
**Client :** Annabel Coulthard - Coco Belle Therapies

---

## Licence

Ce projet est propriétaire et appartient à Coco Belle Therapies.

---

## Commandes utiles

### **Développement**

```bash
# Frontend
cd frontend
npm run dev

# Backend
cd backend
npm run dev
```

### **Production**

```bash
# Frontend (build)
cd frontend
npm run build

# Backend
cd backend
npm start
```

### **Base de données**

```bash
# Créer les tables
cd backend
node -e "require('./models').sequelize.sync({ force: true })"
```

---

## Support

Pour toute question ou support :

- **Email :** info@cocobelletherapies.com
- **WhatsApp :** +44 7801 766737

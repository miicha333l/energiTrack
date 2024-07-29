# energiTrack
EnergiTrack est une application innovante de suivi et de gestion de la consommation énergétique à domicile.

## Fonctionnalités

- **Suivi de la consommation énergétique :**
  - Visualisation de la consommation d'énergie par jour, semaine et mois.
  - Comparaison avec les périodes précédentes.
  - Graphiques interactifs pour une analyse détaillée.

- **Conseils pour économiser de l'énergie :**
  - Recommandations personnalisées basées sur les habitudes de consommation.
  - Articles et vidéos éducatives sur l'efficacité énergétique.

- **Alertes et notifications :**
  - Notifications en temps réel en cas de consommation excessive.
  - Alertes pour rappeler de vérifier ou éteindre certains appareils.

- **Intégration avec des dispositifs domestiques intelligents (IoT) :**
  - Connexion avec des appareils intelligents pour un suivi précis (thermostats, ampoules, prises intelligentes).
  - Commandes à distance pour éteindre/activer des appareils.

- **Rapports détaillés :**
  - Génération de rapports détaillés sur la consommation énergétique.
  - Analyse des coûts énergétiques et prévisions.

- **Tableau de bord personnalisé :**
  - Interface personnalisable pour visualiser les informations importantes en un coup d'œil.

## Technologies Utilisées

### Front-end
- **Framework** : React.js
- **Bibliothèque UI** : Material-UI
- **Graphiques** : Recharts

### Back-end
- **Serveur** : Node.js avec Express.js
- **Base de données** : MongoDB
- **API** : RESTful API

### Intégration IoT
- **Protocoles** : MQTT ou WebSocket
- **API** : Intégration avec des services comme IFTTT ou des APIs spécifiques aux fabricants d'appareils (ex: Nest, Philips Hue).

### Authentification et Sécurité
- **JWT (JSON Web Tokens)** pour la gestion des sessions utilisateur.
- **OAuth2** pour l'intégration avec des services tiers.

### Déploiement
- **Front-end** : Hébergement sur Netlify ou Vercel
- **Back-end** : Hébergement sur Heroku ou un serveur VPS
- **Base de données** : MongoDB Atlas

## Installation

### Prérequis
- Node.js
- npm (Node Package Manager)
- MongoDB

### Étapes d'installation

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/miicha333l/energiTrack.git
   cd energiTrack


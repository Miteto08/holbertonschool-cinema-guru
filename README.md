# Cinema Guru 🎬

Cinema Guru est une application web moderne permettant aux utilisateurs de découvrir, noter et partager leurs expériences cinématographiques.

## 🌟 Fonctionnalités

- **Authentification** : Système complet de connexion et d'inscription
- **Interface Utilisateur** : Design moderne et responsive
- **Gestion des Films** : Recherche, notation et commentaires
- **Profil Utilisateur** : Personnalisation et historique des films

## 🚀 Technologies Utilisées

### Frontend
- React.js
- CSS3 avec modules
- Axios pour les requêtes HTTP
- FontAwesome pour les icônes

### Backend
- API RESTful
- Base de données relationnelle
- Système d'authentification sécurisé

## 🛠️ Installation

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/cinema-guru.git
cd cinema-guru
```

2. Installez les dépendances du frontend :
```bash
cd frontend
npm install
```

3. Installez les dépendances du backend :
```bash
cd ../holbertonschool-cinema-guru-API
npm install
```

## 🏃‍♂️ Lancement

1. Démarrez le backend :
```bash
cd holbertonschool-cinema-guru-API
npm start
```

2. Dans un nouveau terminal, démarrez le frontend :
```bash
cd frontend
npm start
```

L'application sera accessible à l'adresse : `http://localhost:3000`

## 📁 Structure du Projet

```
cinema-guru/
├── frontend/                 # Application React
│   ├── src/
│   │   ├── routes/          # Composants de routage
│   │   ├── components/      # Composants réutilisables
│   │   └── App.js          # Point d'entrée de l'application
│   └── package.json
│
└── holbertonschool-cinema-guru-API/  # Backend API
    ├── src/
    └── package.json
```

## 🔒 Authentification

L'application utilise un système d'authentification JWT (JSON Web Tokens) pour sécuriser les routes et les données utilisateur.

## 👥 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteurs

- Votre Nom - Développeur Principal

## 🙏 Remerciements

- Holberton School pour le support et la formation
- La communauté open source pour les outils et bibliothèques utilisés 
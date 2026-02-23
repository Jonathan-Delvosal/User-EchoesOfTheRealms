# Jeux Angu - RPG en ligne

Un jeu de rôle (RPG) full-stack moderne créé avec Angular, ASP.NET Core, et une base de données SQL. Le projet démontre l'intégration complète entre le frontend et le backend pour un système de jeu immersif avec combat, inventaire, commerce et exploration.

## 🎮 Fonctionnalités Principales

### Système d'authentification
- **Inscription et Connexion** : Création de compte et authentification sécurisée
- **JWT Interceptor** : Protection des requêtes API avec tokens JWT
- **Guards** : Vérification des permissions d'accès aux sections du jeu

### Gestion des Personnages
- **Création de personnage** : Création d'un nouveau héros avec sélection de classe/métier
- **Fiche personnage** : Affichage des statistiques et compétences
- **Système d'équipement** : Équipement par zone (casque, armure, bottes, armes, etc.)
- **Inventaire** : Gestion des objets et ressources collectés
- **Sauvegarde/Chargement** : Persistance des données du personnage

### Système de Combat
- **Combat au tour par tour** : Affrontements tactiques avec monstres
- **Calcul d'attaque** : Système de dégâts basé sur les statistiques
- **Récompenses** : Obtention d'or, d'équipements et d'objets après victoire
- **Etat du combat** : Suivi de l'état des combattants

### Monde Explorable
- **Carte 2D** : Navigation dans le monde du jeu
- **Détection de proximité** : Système de rencontre avec les monstres
- **Affichage des statistiques** : Vue des stats du personnage en exploration

### Système de Marchand
- **Commerce** : Achat et vente d'équipements et d'objets
- **Gestion de l'inventaire** : Équipement et retrait d'objets

## 🛠️ Stack Technologique

### Frontend
- **Angular 20.1.0** : Framework principal pour l'interface utilisateur
- **TypeScript** : Langage de programmation
- **RxJS** : Gestion des flux asynchrones
- **PrimeNG & PrimeFlex** : Composants UI professionnels
- **SCSS** : Stylisation avancée

### Backend
- **ASP.NET Core** : Framework backend (WEB API)
- **C#** : Langage de programmation
- **Base de données SQL** : Stockage persistant des données

### Outils de développement
- **Angular CLI** : Outils de développement Angular
- **Karma & Jasmine** : Framework de test
- **json-server** : Serveur mock pour le développement local
- **Prettier** : Formatage du code

## 📁 Structure du Projet

```
src/
├── app/
│   ├── Account/              # Gestion des comptes utilisateurs
│   ├── Decoration/           # Composants visuels (bannière, footer, about)
│   ├── Guard/                # Guards pour la protection des routes
│   ├── Interceptor/          # Intercepteurs HTTP (JWT)
│   ├── models/               # Modèles de données TypeScript
│   ├── O-Connexion/          # Module de connexion/inscription
│   ├── O-Fight/              # Module de combat
│   ├── O-Marchand/           # Module marchand
│   ├── O-Monde/              # Module monde et exploration
│   ├── O-Option/             # Module options (charger/sauvegarder)
│   ├── O-Perso/              # Module gestion personnage
│   ├── Services/             # Services métier et API
│   └── Utils/                # Utilitaires et helper tools
├── environments/             # Configuration par environnement
├── public/                   # Assets statiques
└── styles.scss               # Styles globaux
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (v20 ou supérieure)
- npm ou yarn
- Backend API en cours d'exécution (ASP.NET Core)

### Installation

```bash
# Cloner le repository
git clone <url-du-repository>
cd JeuxAngu

# Installer les dépendances
npm install
```

### Démarrage du développement

```bash
# Mode développement simple
npm start
# L'application sera disponible à http://localhost:4200/

# Mode développement avec serveur mock et API
npm run dev
# Lance concurrément Angular et json-server
```

### Build pour la production

```bash
npm run build
# Les fichiers de distribution seront dans le dossier dist/
```

### Lancer les tests

```bash
npm test
# Lance les tests avec Karma et Jasmine
```

## 🗄️ Modèles de Données Principaux

### Customer (Utilisateur)
- Compte utilisateur avec authentification
- Relation 1:N avec Personnages
- Relation 1:1 avec Adresse

### Personnage (PCSheet)
- Statistiques (force, dextérité, constitution, etc.)
- Classe/Métier (JobSheet)
- Inventaire (EquipmentSheet)
- Équipements équipés par zone

### Système d'Attaque
- Calcul basé sur les statistiques du personnage
- Application des dégâts au combat (AttackResult)
- Persévérance aux combats

### Monstres
- État du monstre (MonsterState)
- Récompenses (or, équipements, objets)

## 📝 Services Principaux

- **CharacterApiService** : Communication avec l'API pour les personnages
- **CombatApiService** : Gestion des combats
- **HeroService** : Service métier pour le héros actuel
- **SaverService** : Sauvegarde et chargement des données
- **CombatStateService** : État global du combat
- **ProximityService** : Détection de proximité pour les rencontres

## 🔐 Sécurité

- **JWT Interceptor** : Ajout automatique du token JWT aux requêtes
- **IsLoggedGuard** : Protection des routes pour utilisateurs authentifiés
- **HasPCSheetsGuard** : Vérification de la possession d'un personnage
- **Authentification ASP.NET** : Validation serveur

## 🎯 Objectifs du Projet

Ce projet démontre :
- ✅ Intégration frontend/backend complète
- ✅ Système d'authentification sécurisé
- ✅ Architecture modulaire et évolutive
- ✅ Gestion d'état avec RxJS
- ✅ Design pattern et bonnes pratiques Angular
- ✅ API RESTful bien structurée
- ✅ Système de gameplay complet (combat, inventaire, économie)

## 👨‍💻 Auteur

Projet développé à des fins éducatives pour approfondir les connaissances en :
- Angular moderne
- ASP.NET Core
- Architecture full-stack
- Développement de jeu

## 📄 Licence

Ce projet est fourni à titre éducatif.

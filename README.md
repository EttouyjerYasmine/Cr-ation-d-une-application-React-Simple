# TP React – Composants et Props

## Description

Ce TP a pour objectif de découvrir les bases de **React** :  
- Création de composants fonctionnels  
- Utilisation des **props** pour transmettre des données  
- Gestion de listes et de fragments JSX  
- Vérification des types avec **PropTypes**

L'application affiche :
- Un message "Hello World"  
- Un composant de salutation personnalisé (`Greeting`)  
- Les informations d’un utilisateur (`Profil`)  
- Une liste de voitures (`Voiture`)  
- Une liste de courses (`ListeCourses`)  

---

## Installation

1. Cloner le projet ou télécharger le dossier `tp-creat`  
2. Ouvrir un terminal dans le dossier racine du projet  
3. Installer les dépendances 
   
## Structure du tp


tp-creat/
├── node_modules/
├── public/
├── src/
│   ├── App.js
│   ├── HelloWorld.js
│   ├── Greeting.js
│   ├── Profil.js
│   ├── Voiture.js
│   ├── ListeCourses.js
│   └── index.js
├── package.json
└── README.md



###Structure du tp
- <img width="960" height="402" alt="Structure du projet" src="https://github.com/user-attachments/assets/1cd8ba08-c6a6-4b7a-b753-b4d364d66409" />


##Implementation du tp

- <img width="960" height="507" alt="TP1" src="https://github.com/user-attachments/assets/a3e4acda-bbc1-40a8-864d-4b5cfc3064c7" />

- L’application sera disponible sur http://localhost:3000.


## Concepts utilisés
JSX : Syntaxe HTML-like dans JavaScript

Props : Données transmises du parent vers l’enfant (immuables)

State : Gestion de l’état local d’un composant

Fragments : Retourner plusieurs éléments sans wrapper <div>

PropTypes : Vérification des types des props

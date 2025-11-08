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
3. Installer les dépendances :  

```bash
npm install



##Structure du tp
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

!(C:\Users\hp\Downloads\Nouveau dossier/Structure du tp.png)


##Implementation du tp 

!(C:\Users\hp\Downloads\Nouveau dossier/TP1.png)


- L’application sera disponible sur http://localhost:3000.


##Concepts utilisés
JSX : Syntaxe HTML-like dans JavaScript

Props : Données transmises du parent vers l’enfant (immuables)

State : Gestion de l’état local d’un composant

Fragments : Retourner plusieurs éléments sans wrapper <div>

PropTypes : Vérification des types des props
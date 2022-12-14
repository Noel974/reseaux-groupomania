
# A propos

Le projet consiste à construire un réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues. Le département RH de Groupomania a imaginé plusieurs fonctionnalités pour favoriser les échanges entre collègues.

# Technologies utilisées

* Front-end : React, CSS
* Back-end : MongoDB, Mongoose, Express

# Installation

## Server :

* Télécharger __NodeJS__ si besoin
* Créer un fichier `.env`dans le dossier __backend__ et veuillez rentrer le host, les identifiants de votre utilisateur admin et le nom de la base de données que vous souhaitez créer `SECRET_DB = "mongodb+srv://cluster0:groupomania@cluster0.orfzigj.mongodb.net/?retryWrites=true&w=majority"` et `RANDOM_TOKEN_SECRET =  Token`
Veuillez inserer la table users.json dans la base de donnée mongodb elle contient l'adresse de l'admin qui est `admin@admin.fr` mp `Admin12` pour le test.
* Se rendre dans le dossier Backend via un terminal et installertoute les dépendances avec `$ npm install`
* Lancer le serveur avec `$ nodemon server`

## Frontend :

* Ouvrir un nouveau terminal et se rendre dans le dossier Frontend `$ cd frontend`
* Installer toute les dépendances avec `$ npm install`
* Lancer React avec la commande `$ npm start`

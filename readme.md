
# A propos

Le projet consiste à construire un réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues. Le département RH de Groupomania a imaginé plusieurs fonctionnalités pour favoriser les échanges entre collègues.

# Technologies utilisées

* Front-end : React, CSS
* Back-end : MongoDB, Mongoose, Express

# Installation

## Server :

* Télécharger __NodeJS__ si besoin
* Créer un fichier `.env`dans le dossier __backend__ et veuillez rentrer le host, les identifiants de votre utilisateur admin et le nom de la base de données que vous souhaitez créer `SECRET_DB = "mongodb+srv://akju:groupomania@cluster0.orfzigj.mongodb.net/?retryWrites=true&w=majority"` et `RANDOM_TOKEN_SECRET =  Token`
* Se rendre dans le dossier Backend via un terminal et installer __Node__ et toute les dépendances avec `$ npm i`
* Lancer le serveur avec `$ nodemon`

## Frontend :

* Ouvrir un nouveau terminal et se rendre dans le dossier Frontend `$ cd frontend`
* Installer __Node__ et toute les dépendances avec `$ npm i`
* Lancer React avec la commande `$ npm start`

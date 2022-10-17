const express = require("express");

const cockiesPraser = require("cookie-parser");

const path = require("path");
var cors = require('cors');
const helmet = require('helmet');

const { checkUser, requireAuth } = require("./middleware/auth.middleware");

// connection base de donnée 
const mongoose = require("mongoose");

// Les routes 
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");

require("dotenv").config();

const app = express(); /*** appeler express pour créer notre application express ***/

//connection mongodb
// connexion a la base de données mongoDB
mongoose.connect(process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))


/*** Middleware général/ configurer des Headers sur l'objet réponse pour eviter les erreurs du CORS (Cross Origin Resource Sharing)
    et assurer que le front-end pourra effectuer des appels vers l'application en toute sécurité.  ***/
//CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); /*** d'accéder à notre API depuis n'importe quelle origine ***/
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); /*** d'ajouter les headers mentionnés aux requêtes envoyées vers notre API ***/
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); /*** d'envoyer des requêtes avec les méthodes mentionnées  ***/
  next();
});


/*** création d'un middleware pour indiquer à Express qu'il faut gérer la ressource images de manière statique 
(un sous-répertoire de notre répertoire de base, __dirname:nom du dossier ) à chaque fois qu'elle reçoit une requête vers la route /images ***/
;
app.use(express.json());

app.use(cors())
app.use(cockiesPraser()); // for parsing cookies


/*** importer le module express-rate-limit pour limiter le nombre de requêtes que peut faire un utilisateur ***/
const rateLimit = require("express-rate-limit");
//const { param } = require('../server/routes/test');
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  /*** pour chaque 10 minutes ***/
  max: 40 /*** L'utilisateur pourra faire 40 requêtes toutes les 10 minutes ***/
});
/*** Cette limite de 40 requêtes toutes les 10 minutes sera effective sur toutes les routes ***/
app.use(limiter);



/*** securisé les en-têtes HTTP ***/
app.use(helmet());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// upload image
app.use("/images", express.static(path.join(__dirname, "images")));

// jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

// Routes
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

module.exports = app;
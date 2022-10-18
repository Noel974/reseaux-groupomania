const express = require("express");

const cookieParser = require("cookie-parser");

const path = require("path");
const cors = require('cors');
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
// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use(cors());

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(helmet({crossOriginResourcePolicy: false,})
);

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
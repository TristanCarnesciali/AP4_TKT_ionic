const express = require('express');

//on appelle toutes les routes
const user = require('./routes/userRoutes');
const mission = require('./routes/missionsRoutes');
const niveau = require('./routes/niveauRoutes');
const continent = require('./routes/continentRoutes');
const etatMission = require('./routes/etatMissionRoutes');
const type = require('./routes/typeRoutes');
const enclos = require('./routes/enclosRoutes');
const animal = require('./routes/animalRoutes.js');
const avertissements = require('./routes/avertissementsRoutes.js');
const espece = require('./routes/especeRoutes.js');
const sante = require('./routes/santeRoutes.js');

const app = express();
const cors = require('cors');

app.use(cors({
    origin: 'https://localhost:3000'
}));

app.use(express.json()); //on renvoit au format json
app.use(express.urlencoded({ extended: true })); //pour récupérer les infos grâce au body

app.use(user);
app.use(mission);
app.use(niveau);
app.use(continent);
app.use(etatMission);
app.use(type);
app.use(enclos);
app.use(animal);
app.use(avertissements);
app.use(espece);
app.use(sante);

var logger = require("./logger").Logger;

app.use(function timeLog(req, res, next) {
    // this is an example of how you would call our new logging system to log an info message
    logger.info("Test Message");
    next();
});

//on ouvre le serveur en local
app.listen(3000, () => console.log('Le serveur est ouvert : http://localhost:3000'));
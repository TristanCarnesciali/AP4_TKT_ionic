const express = require('express');

//on appelle toutes les routes
const user = require('./routes/userRoutes');
const mission = require('./routes/missionsRoutes')
const niveau = require('./routes/niveauRoutes')
const continent = require('./routes/continentRoutes')
const etatMission = require('./routes/etatMissionRoutes')
const type = require('./routes/typeRoutes')

const app = express();

app.use(express.json()); //on renvoit au format json

app.use(express.urlencoded({ extended: true })); //pour récupérer les infos grâce au body

app.use(user);
app.use(mission);
app.use(niveau);
app.use(continent);
app.use(etatMission);
app.use(type);

//on ouvre le serveur en local
app.listen(3000, () => console.log('Le serveur est ouvert : http://localhost:3000'));
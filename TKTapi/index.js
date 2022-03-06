const express = require('express');

//on appelle les routes d'authentifications
const user = require('./routes/userRoutes');

//on appelle les routes des missions
const mission = require('./routes/missionsRoutes')

const app = express();

app.use(express.json()); //on renvoit au format json

app.use(express.urlencoded({ extended: true })); //pour récupérer les infos grâce au body

app.use(user);
app.use(mission);

//on ouvre le serveur en local
app.listen(3000, () => console.log('Le serveur est ouvert : http://localhost:3000'));
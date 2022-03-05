const express = require('express');
const routes = require('./routes/userRoutes'); //on appelle les routes
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true })); //pour récupérer les infos grâce au body

app.use(routes);

// gestion des erreurs liées à la bdd
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Erreur interne au serveur";
    res.status(err.statusCode).json({
        message: err.message,
    });
});

//on ouvre le serveur en local
app.listen(3000, () => console.log('Le serveur est ouvert : http://localhost:3000'));
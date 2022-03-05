const express = require('express');
const routes = require('./routes/userRoutes');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routes);
// gestion des erreurs
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Erreur interne au serveur";
    res.status(err.statusCode).json({
        message: err.message,
    });
});

app.listen(3000, () => console.log('Le serveur est ouvert : http://localhost:3000'));
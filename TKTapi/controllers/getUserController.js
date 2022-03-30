const jwt = require('jsonwebtoken'); //gestion du token
const conn = require('../dbConnexion').promise();

exports.userInfo = async(req, res, next) => {
    try {
        //on affiche le user connecté avec son token
        const [row] = await conn.execute(
            "SELECT `id`,`username` FROM `user` WHERE `id`=?", [req.params.id]
        );
        if (row.length > 0) {
            return res.json({
                user: row[0]
            });
        }
        res.json({
            message: "No user found"
        });
    } catch (err) {
        next(err);
    }
}

exports.getUser = async(req, res, next) => {
    try {
        //on vérifie si le token existe
        if (!req.headers.authorization ||
            !req.headers.authorization.startsWith('Bearer') ||
            !req.headers.authorization.split(' ')[1]
        ) {
            return res.status(422).json({
                message: "Please provide the token",
            });
        }
        //on commence à lire le token apres Bearer
        const theToken = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(theToken, 'the-super-strong-secret');

        //on affiche le user connecté avec son token
        const [row] = await conn.execute(
            "SELECT `id`,`username` FROM `user` WHERE `id`=?", [decoded.id]
        );
        if (row.length > 0) {
            return res.json({
                user: row[0]
            });
        }
        res.json({
            message: "No user found"
        });
    } catch (err) {
        next(err);
    }
};

exports.getUserv2 = async(req, res, next) => {
    try {
        //on stock le resultat de la requête
        const [rows] = await conn.execute(
            "SELECT id, username, idRole FROM user WHERE username = ?", [req.params.username]
        );
        if (rows.length > 0) {
            return res.json({
                user: rows
            })
        }
    } catch (err) {
        next(err);
    }



};

exports.getAllUsers = async(req, res, next) => {
    try {
        //on stock le resultat de la requête
        const [rows] = await conn.execute(
            "SELECT id, username FROM user", [req.body]
        );
        if (rows.length > 0) {
            return res.json({
                users: rows
            })
        }
    } catch (err) {
        next(err);
    }
};
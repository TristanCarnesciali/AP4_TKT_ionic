const jwt = require('jsonwebtoken'); //gestion du token
const conn = require('../dbConnexion').promise();

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
}
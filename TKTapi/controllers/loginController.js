const jwt = require('jsonwebtoken'); //gestion du token
const bcrypt = require('bcryptjs'); //pour crypté le password
const conn = require('../dbConnexion').promise();
var logger = require("../logger").Logger;

exports.login = async(req, res, next) => {
    try {
        //je stock le resultat de ma requête
        const [row] = await conn.execute(
            "SELECT * FROM `user` WHERE `username`=?", [req.body.username]
        );
        // }
        //=== égalité sticte et renvoie un boolean
        if (row.length === 0) {
            return res.status(422).json({
                message: "Invalid username",
            });
        }
        logger.info("L'utilisateur " + req.body.username + " s'est connecté");
        //compare le password hashé 
        const passMatch = await bcrypt.compare(req.body.password, row[0].password);
        if (!passMatch) {
            return res.status(422).json({
                message: "Incorrect password",
            });
        }
        //génère le token avec la librairie JWT par rapport au 2e paramètre
        const theToken = jwt.sign({ id: row[0].id }, 'the-super-strong-secret', { expiresIn: '1h' });
        return res.json({
            token: theToken
        });
    } catch (err) {
        next(err);
    }
}
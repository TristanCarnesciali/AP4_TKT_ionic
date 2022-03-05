const bcrypt = require('bcryptjs'); //pour crypté le password
const conn = require('../dbConnexion').promise();

exports.register = async(req, res, next) => {
    try {
        //je stock le resultat de ma requête
        const [row] = await conn.execute(
            "SELECT `username` FROM `user` WHERE `username`=? and `email`=?", [req.body.username, req.body.email]
        );

        //check si le user existe dans la bdd
        if (row.length > 0) {
            return res.status(201).json({
                message: "The username already in use",
            });
        }
        //on hash le password avec la librarie bcrypt
        const hashPass = await bcrypt.hash(req.body.password, 12);

        //on envoie dans la bdd les valeur du body
        const [rows] = await conn.execute('INSERT INTO `user`(`username`,`email`, `password`, `idRole`) VALUES(?,?,?,?)', [
            req.body.username,
            req.body.email,
            hashPass,
            req.body.idRole,
        ]);

        //l'opération s'est bien passé (1) on affiche un message
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The user has been successfully inserted.",
            });
        }
    } catch (err) {
        next(err);
    }
}
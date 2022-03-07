const conn = require('../dbConnexion').promise();

// trouver toute les mission de la bdd
exports.findAll = async(req, res, next) => {
    try {
        //on stock le resultat de la requête
        const [rows] = await conn.execute(
            "SELECT * FROM mission", [req.body]
        );
        if (rows.length > 0) {
            return res.json({
                mission: rows
            })
        }
    } catch (err) {
        next(err);
    }
};

exports.create = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('INSERT INTO `mission`(`libelle`,`description`, `complete`,' +
            '`commentaire`, `idUser`, `idEtat`, `date`) VALUES(?,?,?,?,?,?,?)', [
                req.body.libelle,
                req.body.description,
                req.body.complete,
                req.body.commentaire,
                req.body.idUser,
                req.body.idEtat,
                req.body.date,
            ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The mission has been successfully inserted.",
            });
        }
    } catch (err) {
        next(err);
    }
}

exports.findOne = async(req, res, next) => {
    try {
        const [rows] = await conn.execute("SELECT * FROM mission WHERE id = ?", [
            req.params.id
        ]);
        if (rows.length > 0) {
            return res.json({
                mission: rows[0]
            })
        }
    } catch (err) {
        next(err);
    }
}

exports.update = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('UPDATE `mission` SET libelle=?, description=?, complete=?, commentaire=?, idUser=?, idEtat=?, date=? WHERE id=?', [
            req.body.libelle,
            req.body.description,
            req.body.complete,
            req.body.commentaire,
            req.body.idUser,
            req.body.idEtat,
            req.body.date,
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The mission has been successfully updated.",
            });
        }
    } catch (err) {
        next(err);
    }
}

exports.drop = async(req, res, next) => {
    try {
        const [rows] = await conn.execute("DELETE FROM mission WHERE id = ?", [
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The mission has been successfully deleted.",
            });
        }
    } catch (err) {
        next(err);
    }
}
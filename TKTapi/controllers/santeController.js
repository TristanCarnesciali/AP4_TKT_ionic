const conn = require('../dbConnexion').promise();

// trouver toute les mission de la bdd
exports.findAll = async(req, res, next) => {
    try {
        //on stock le resultat de la requête
        const [rows] = await conn.execute(
            "SELECT * FROM sante", [req.body]
        );
        if (rows.length > 0) {
            return res.json({
                sante: rows
            })
        }
    } catch (err) {
        next(err);
    }
};

exports.create = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('INSERT INTO sante SET etat=?, idAnimal=?', [
            req.body.etat,
            req.body.idAnimal,
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The sante has been successfully inserted.",
            });
        }
    } catch (err) {
        next(err);
    }
}

exports.findOne = async(req, res, next) => {
    try {
        const [rows] = await conn.execute("SELECT * FROM sante WHERE id = ?", [
            req.params.id
        ]);
        if (rows.length > 0) {
            return res.json({
                sante: rows[0]
            })
        }
    } catch (err) {
        next(err);
    }
}

exports.update = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('UPDATE `sante` SET etat=?, idAnimal=? WHERE id=?', [
            req.body.etat,
            req.body.idAnimal,
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The sante has been successfully updated.",
            });
        }
    } catch (err) {
        next(err);
    }
}

exports.drop = async(req, res, next) => {
    try {
        const [rows] = await conn.execute("DELETE FROM sante WHERE id = ?", [
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The sante has been successfully deleted.",
            });
        }
    } catch (err) {
        next(err);
    }
}
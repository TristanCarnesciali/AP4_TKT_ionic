const conn = require('../dbConnexion').promise();

// trouver toute les mission de la bdd
exports.findAll = async(req, res, next) => {
    try {
        //on stock le resultat de la requête
        const [rows] = await conn.execute(
            "SELECT * FROM avertissements", [req.body]
        );
        if (rows.length > 0) {
            return res.json({
                avertissements: rows
            })
        }
    } catch (err) {
        next(err);
    }
};

exports.create = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('INSERT INTO avertissements SET libelle=?, idNiveau=?', [
            req.body.libelle,
            req.body.idNiveau,
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The avertissement has been successfully inserted.",
            });
        }
    } catch (err) {
        next(err);
    }
}

exports.findOne = async(req, res, next) => {
    try {
        const [rows] = await conn.execute("SELECT * FROM avertissements WHERE id = ?", [
            req.params.id
        ]);
        if (rows.length > 0) {
            return res.json({
                avertissements: rows[0]
            })
        }
    } catch (err) {
        next(err);
    }
}

exports.update = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('UPDATE `avertissements` SET libelle=?, idNiveau=? WHERE id=?', [
            req.body.libelle,
            req.body.idNiveau,
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The avertissements has been successfully updated.",
            });
        }
    } catch (err) {
        next(err);
    }
}

exports.drop = async(req, res, next) => {
    try {
        const [rows] = await conn.execute("DELETE FROM avertissements WHERE id = ?", [
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The avertissements has been successfully deleted.",
            });
        }
    } catch (err) {
        next(err);
    }
}
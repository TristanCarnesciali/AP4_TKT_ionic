const conn = require('../dbConnexion').promise();

// trouver toute les mission de la bdd
exports.findAll = async(req, res, next) => {
    try {
        //on stock le resultat de la requête
        const [rows] = await conn.execute(
            "SELECT * FROM niveau", [req.body]
        );
        if (rows.length > 0) {
            return res.json({
                niveau: rows
            })
        }
    } catch (err) {
        next(err);
    }
};

exports.create = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('INSERT INTO niveau SET libelle=?', [
            req.body.libelle,
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The niveau has been successfully inserted.",
            });
        }
    } catch (err) {
        next(err);
    }
}

exports.findOne = async(req, res, next) => {
    try {
        const [rows] = await conn.execute("SELECT * FROM niveau WHERE id = ?", [
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
        const [rows] = await conn.execute('UPDATE `niveau` SET libelle=? WHERE id=?', [
            req.body.libelle,
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The niveau has been successfully updated.",
            });
        }
    } catch (err) {
        next(err);
    }
}

exports.drop = async(req, res, next) => {
    try {
        const [rows] = await conn.execute("DELETE FROM niveau WHERE id = ?", [
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The niveau has been successfully deleted.",
            });
        }
    } catch (err) {
        next(err);
    }
}
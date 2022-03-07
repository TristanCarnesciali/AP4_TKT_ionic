const conn = require('../dbConnexion').promise();

// trouver toute les mission de la bdd
exports.findAll = async(req, res, next) => {
    try {
        //on stock le resultat de la requête
        const [rows] = await conn.execute(
            "SELECT * FROM etatmission", [req.body]
        );
        if (rows.length > 0) {
            return res.json({
                etatMission: rows
            })
        }
    } catch (err) {
        next(err);
    }
};

exports.create = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('INSERT INTO etatmission SET libelle=?', [
            req.body.libelle,
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The etatmission has been successfully inserted.",
            });
        }
    } catch (err) {
        next(err);
    }
}

exports.findOne = async(req, res, next) => {
    try {
        const [rows] = await conn.execute("SELECT * FROM etatmission WHERE id = ?", [
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
        const [rows] = await conn.execute('UPDATE `etatmission` SET libelle=? WHERE id=?', [
            req.body.libelle,
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The etatmission has been successfully updated.",
            });
        }
    } catch (err) {
        next(err);
    }
}

exports.drop = async(req, res, next) => {
    try {
        const [rows] = await conn.execute("DELETE FROM etatmission WHERE id = ?", [
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The etatmission has been successfully deleted.",
            });
        }
    } catch (err) {
        next(err);
    }
}
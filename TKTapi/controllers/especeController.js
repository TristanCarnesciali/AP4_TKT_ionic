const conn = require('../dbConnexion').promise();
const url = require("url");

// trouver toute les mission de la bdd
exports.findAll = async(req, res, next) => {
    try {
        //on stock le resultat de la requête
        const [rows] = await conn.execute(
            "SELECT * FROM espece", [req.body]
        );
        if (rows.length > 0) {
            return res.json({
                espece: rows
            })
        }
    } catch (err) {
        next(err);
    }
};

exports.create = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('INSERT INTO espece SET libelle=?, image=?, description=?, taille=?, poidsMin=?, poidsMax=?, idType=?', [
            req.body.libelle,
            req.body.image,
            req.body.description,
            req.body.taille,
            req.body.poidsMin,
            req.body.poidsMax,
            req.body.idType,
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The espece has been successfully inserted.",
            });
        }
    } catch (err) {
        next(err);
    }
}

exports.findOne = async(req, res, next) => {
    try {
        const [rows] = await conn.execute("SELECT * FROM espece WHERE id = ?", [
            req.params.id
        ]);
        if (rows.length > 0) {
            return res.json({
                espece: rows[0]
            })
        }
    } catch (err) {
        next(err);
    }
}

exports.update = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('UPDATE `espece` SET libelle=?, image=?, description=?, taille=?, poidsMin=?, poidsMax=?, idType=? WHERE id=?', [
            req.body.libelle,
            req.body.image,
            req.body.description,
            req.body.taille,
            req.body.poidsMin,
            req.body.poidsMax,
            req.body.idType,
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The espece has been successfully updated.",
            });
        }
    } catch (err) {
        next(err);
    }
}

exports.drop = async(req, res, next) => {
    try {
        const [rows] = await conn.execute("DELETE FROM espece WHERE id = ?", [
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The espece has been successfully deleted.",
            });
        }
    } catch (err) {
        next(err);
    }
}

exports.filter = async(req, res, next) => {
    try {
        const query = url.parse(req.url, true).query;
        const [rows] = await conn.execute(`SELECT * FROM espece WHERE UPPER(libelle) LIKE UPPER("%${query.nom}%") AND UPPER(description) LIKE UPPER("%${query.desc}%") AND idType LIKE "%${query.regime}%"`);
        return res.json({
            espece: rows
        })
    } catch (err) {
        next(err);
    }
}
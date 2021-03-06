const conn = require('../dbConnexion').promise();

// trouver toute les mission de la bdd
exports.findAll = async(req, res, next) => {
    try {
        //on stock le resultat de la requête
        const [rows] = await conn.execute(
            `SELECT * FROM animal INNER JOIN espece on animal.idEspece=espece.id`, [req.body]
        );
        if (rows.length > 0) {
            return res.json({
                animal: rows
            })
        }
    } catch (err) {
        next(err);
    }
};

exports.create = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('INSERT INTO animal SET nom=?, idEnclos=?, idEspece=?, idSante=?', [
            req.body.nom,
            req.body.idEnclos,
            req.body.idEspece,
            req.body.idSante,
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The animal has been successfully inserted.",
            });
        }
    } catch (err) {
        next(err);
    }
}

exports.findOne = async(req, res, next) => {
    try {
        const [rows] = await conn.execute("SELECT * FROM animal inner join espece on espece.id = animal.idEspece WHERE animal.id = ?", [
            req.params.id
        ]);
        if (rows.length > 0) {
            return res.json({
                animal: rows[0]
            })
        }
    } catch (err) {
        next(err);
    }
}

exports.update = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('UPDATE `animal` SET nom=?, idEnclos=?, idEspece=?, idSante=? WHERE id=?', [
            req.body.libelle,
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The animal has been successfully updated.",
            });
        }
    } catch (err) {
        next(err);
    }
}

exports.drop = async(req, res, next) => {
    try {
        const [rows] = await conn.execute("DELETE FROM animal WHERE id = ?", [
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The animal has been successfully deleted.",
            });
        }
    } catch (err) {
        next(err);
    }
}
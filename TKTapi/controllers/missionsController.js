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

exports.findAllCompl = async(req, res, next) => {
    try {
        //on stock le resultat de la requête
        const [rows] = await conn.execute(
            "SELECT mission.id, mission.libelle, description, complete, idUser, commentaire, enclos.libelle as enclos, animal.nom as nomAnimal, etatmission.libelle as etat, date from mission INNER join enclos on enclos.id = idEnclos inner join animal on animal.id = idAnimal inner join etatmission on etatmission.id = idEtat", [req.body]
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



exports.findAllComplOrNull = async(req, res, next) => {
    try {
        const [rows] = await conn.execute("SELECT mission.id, mission.libelle, description, complete, commentaire, idUser, enclos.libelle as enclos, animal.nom as nomAnimal, etatmission.libelle as etat, date from mission INNER join enclos on enclos.id = idEnclos inner join animal on animal.id = idAnimal inner join etatmission on etatmission.id = idEtat WHERE mission.idUser = ? or mission.idUser = 0", [
            req.params.id
        ]);
        if (rows.length > 0) {
            return res.json({
                mission: rows
            })
        }
    } catch (err) {
        next(err);
    }
};

exports.findOneCompl = async(req, res, next) => {
    try {
        const [rows] = await conn.execute("SELECT mission.id, mission.libelle, description, complete, commentaire, idUser, enclos.libelle as enclos, animal.nom as nomAnimal, etatmission.libelle as etat, date from mission INNER join enclos on enclos.id = idEnclos inner join animal on animal.id = idAnimal inner join etatmission on etatmission.id = idEtat WHERE mission.id = ?", [
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

exports.updateidU = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('UPDATE `mission` SET idUser=? WHERE id=? and libelle=? and description=? ', [
            req.body.idUser,
            req.params.id,
            req.body.libelle,
            req.body.description,
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

exports.updateMfin = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('UPDATE `mission` SET complete=1 WHERE id=? and libelle=? and description=? ', [
            req.params.id,
            req.body.libelle,
            req.body.description,
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

exports.updateCom = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('UPDATE `mission` SET commentaire=? WHERE id=? and libelle=? and description=? ', [
            req.body.commentaire,
            req.params.id,
            req.body.libelle,
            req.body.description,
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
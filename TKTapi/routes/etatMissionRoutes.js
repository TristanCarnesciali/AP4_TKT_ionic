const router = require('express').Router();

//on appelle le controllers
const { findAll, create, findOne, update, drop } = require('../controllers/etatMissionController');

//on défini les routes
router.get('/etat-missions', findAll);
router.post('/etat-mission', create);
router.get('/etat-mission/:id', findOne);
router.put('/etat-mission/:id', update);
router.delete('/etat-mission/:id', drop);

module.exports = router;
const router = require('express').Router();

//on appelle le controllers
const { findAll, findAllCompl, findAllComplOrNull, create, findOne, findOneCompl, update, updateidU, updateMfin, drop } = require('../controllers/missionsController');

//on défini les routes
router.get('/missionsid', findAll);
router.get('/missions', findAllCompl);
router.get('/missions/:id', findAllComplOrNull);
router.post('/mission', create);
router.get('/missionid/:id', findOne);
router.get('/mission/:id', findOneCompl);
router.put('/missionup/:id', update);
router.put('/missionAss/:id', updateidU);
router.put('/missionFin/:id', updateMfin);
router.delete('/mission/:id', drop);

module.exports = router;
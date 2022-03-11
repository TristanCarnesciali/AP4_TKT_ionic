const router = require('express').Router();

//on appelle le controllers
const { findAll, findAllCompl, create, findOne, findOneCompl, update, drop } = require('../controllers/missionsController');

//on défini les routes
router.get('/missionsid', findAll);
router.get('/missions', findAllCompl);
router.post('/mission', create);
router.get('/missionid/:id', findOne);
router.get('/mission/:id', findOneCompl);
router.put('/mission/:id', update);
router.delete('/mission/:id', drop);

module.exports = router;
const router = require('express').Router();

//on appelle le controllers
const { findAll, create, findOne, update, drop } = require('../controllers/missionsController');

//on défini les routes
router.get('/missions', findAll);
router.post('/mission', create);
router.get('/mission/:id', findOne);
router.put('/mission/:id', update);
router.delete('/mission/:id', drop);

module.exports = router;
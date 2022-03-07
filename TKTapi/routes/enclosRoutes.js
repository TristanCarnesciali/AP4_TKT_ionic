const router = require('express').Router();

//on appelle le controllers
const { findAll, create, findOne, update, drop } = require('../controllers/enclosController');

//on défini les routes
router.get('/enclos', findAll);
router.post('/enclos', create);
router.get('/enclos/:id', findOne);
router.put('/enclos/:id', update);
router.delete('/enclos/:id', drop);

module.exports = router;
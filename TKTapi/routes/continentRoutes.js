const router = require('express').Router();

//on appelle le controllers
const { findAll, create, findOne, update, drop } = require('../controllers/continentController');

//on défini les routes
router.get('/continents', findAll);
router.post('/continent', create);
router.get('/continent/:id', findOne);
router.put('/continent/:id', update);
router.delete('/continent/:id', drop);

module.exports = router;
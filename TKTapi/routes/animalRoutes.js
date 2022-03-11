const router = require('express').Router();

//on appelle le controllers
const { findAll, create, findOne, update, drop } = require('../controllers/animalController');

//on défini les routes
router.get('/animaux', findAll);
router.post('/animal', create);
router.get('/animal/:id', findOne);
router.put('/animal/:id', update);
router.delete('/animal/:id', drop);

module.exports = router;
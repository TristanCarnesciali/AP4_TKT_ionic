const router = require('express').Router();

//on appelle le controllers
const { findAll, create, findOne, update, drop } = require('../controllers/avertissementsController');

//on défini les routes
router.get('/avertissements', findAll);
router.post('/avertissement', create);
router.get('/avertissement/:id', findOne);
router.put('/avertissement/:id', update);
router.delete('/avertissement/:id', drop);

module.exports = router;
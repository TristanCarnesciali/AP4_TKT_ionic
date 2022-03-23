const router = require('express').Router();

//on appelle le controllers
const { findAll, create, findOne, update, drop, filter } = require('../controllers/especeController');

//on défini les routes
router.get('/especes', findAll);
router.get('/espece/filter', filter)
router.post('/espece', create);
router.get('/espece/:id', findOne);
router.put('/espece/:id', update);
router.delete('/espece/:id', drop);

module.exports = router;
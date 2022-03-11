const router = require('express').Router();

//on appelle le controllers
const { findAll, create, findOne, update, drop } = require('../controllers/santeController');

//on défini les routes
router.get('/santes', findAll);
router.post('/sante', create);
router.get('/sante/:id', findOne);
router.put('/sante/:id', update);
router.delete('/sante/:id', drop);

module.exports = router;
const router = require('express').Router();

//on appelle le controllers
const { findAll, create, findOne, update, drop } = require('../controllers/typeController');

//on défini les routes
router.get('/types', findAll);
router.post('/type', create);
router.get('/type/:id', findOne);
router.put('/type/:id', update);
router.delete('/type/:id', drop);

module.exports = router;
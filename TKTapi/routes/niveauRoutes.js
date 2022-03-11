const router = require('express').Router();

//on appelle le controllers
const { findAll, create, findOne, update, drop } = require('../controllers/niveauController');

//on défini les routes
router.get('/niveaux', findAll);
router.post('/niveau', create);
router.get('/niveau/:id', findOne);
router.put('/niveau/:id', update);
router.delete('/niveau/:id', drop);

module.exports = router;
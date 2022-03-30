const router = require('express').Router();

//on appelle les controllers
const { register } = require('../controllers/registerController');
const { login } = require('../controllers/loginController');
const { getUser, getAllUsers } = require('../controllers/getUserController');

//on défini les routes pour chaque controllers
router.post('/register', register);
router.post('/login', login);
router.get('/get-user', getUser);
router.get('/users', getAllUsers)

module.exports = router;
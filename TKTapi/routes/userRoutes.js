const router = require('express').Router();

//on appelle les controllers
const { register } = require('../controllers/registerController');
const { login } = require('../controllers/loginController');
const { getUser, getUserv2 } = require('../controllers/getUserController');
const { userInfo } = require('../controllers/getUserController');


//on défini les routes pour chaque controllers
router.post('/register', register);
router.post('/login', login);
router.get('/get-user', getUser);
router.get('/get-user/:id', userInfo)
router.get('/getuserv2/:username', getUserv2);

module.exports = router;
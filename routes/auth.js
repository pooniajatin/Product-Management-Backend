const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const {
  login,
  register,
  refreshToken,
  logout
} = require('../controllers/auth')
const dummy = require('../controllers/dummy')
router.post('/login',login);
router.post('/register',register);
router.post('/refreshtoken',refreshToken);
router.post('/logout',auth ,logout)
router.get('/dummy',auth,dummy)
module.exports = router;
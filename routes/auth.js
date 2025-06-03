const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const {
  login,
  register,
  refreshToken,
  logout
} = require('../controllers/auth')

router.post('/login',login);
router.post('/register',register);
router.post('/refreshtoken',auth ,refreshToken);
router.post('/logout',auth ,logout)
module.exports = router;
const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const {
  login,
  register,
  refreshToken
} = require('../controllers/auth')

router.post('/login',login);
router.post('/register',register);
router.post('/refreshtoken',refreshToken)
module.exports = router;
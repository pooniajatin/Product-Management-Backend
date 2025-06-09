const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const {
  login,
  register,
  refreshToken,
  logout,
  deleteuser
} = require('../controllers/auth')

router.post('/login',login);
router.post('/register',register);
router.post('/refreshtoken',refreshToken);
router.post('/logout',auth ,logout)
router.delete('/delete/:id',deleteuser)
module.exports = router;
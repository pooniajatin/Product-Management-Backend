const express = require("express");
const router = express.Router();
const {
  createProfile,
  getProfile,
  deleteProfile,
  updateProfile,
} = require("../controllers/profile");
const auth = require('../middleware/auth')
router.get('/profile/:id',auth,getProfile)
router.post('/profile',auth,createProfile),
router.delete('/profile/:id',auth,deleteProfile)
router.patch('/profile/:id',auth,updateProfile)
module.exports = router

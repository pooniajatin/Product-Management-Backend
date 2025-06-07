const express = require("express");
const router = express.Router();
const {
  createProfile,
  getProfile,
  deleteProfile,
  updateProfile,
} = require("../controllers/profile");

router.get('/profile/:id',getProfile)
router.post('/profile',createProfile),
router.delete('/profile/:id',deleteProfile)
router.patch('/profile/:id',updateProfile)
module.exports = router

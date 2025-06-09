const Profile = require("../models/profile");
//const User = require('../models/user')

const getProfile = async (req, res) => {
  const { id } = req.params;
  const profile = await Profile.findById(id);
  if(!profile) {
    return res.status(404).json({msg:"Not found"})
  }
  res.status(200).json({profile });
};
const createProfile = async (req, res) => {
  const profile = await Profile.create(req.body);
  res.status(201).json({ profile: profile, msg: "profile created" });
};
const deleteProfile = async (req, res) => {
  const { id } = req.params;
   const profile =await Profile.findByIdAndDelete(id);
  if(!profile) {
    return res.status(404).json({msg:"Not found"})
  }
  res.status(200).json({ msg: "Deleted" });
};
const updateProfile = async (req, res) => {
  const { id } = req.params;
   const profile =await Profile.findByIdAndUpdate(id, req.body);
  if(!profile) {
    return res.status(404).json({msg:"Not found"})
  }
  res.status(200).json({ msg: "Profile Updated Successfully" });
};
module.exports = {
  getProfile,
  createProfile,
  deleteProfile,
  updateProfile,
};

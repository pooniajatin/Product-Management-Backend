const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const Auth = require("../models/auth");
const Profile = require('../models/profile');


const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ msg: "Please provide name, email and password" });
  }
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    return res.status(400).json({
      msg: "Email exists. Please try registering with a different email.",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  const  body = {
     name:user.name,
    email:user.email,
     userId:user._id,
     
  }
  const profile =  await Profile.create(body)
  
  res.status(201).json({
    msg: "User registered successfully",
    user: { name: user.name, email: user.email },
    profile:{profile},
   
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "Enter correct credentials" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ msg: "Invalid Credentials" });
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(401).json({ msg: "Enter Correct Password" });
  }
  const accessToken = jwt.sign(
    {
      UserId: user._id,
      Name: user.email,
    },
    process.env.JWT_ACCESS_SECRET_KEY,
    {
      expiresIn: "30m",
    }
  );
  const refreshToken = jwt.sign(
    { UserId: user._id, Name: user.email },
    process.env.JWT_REFRESH_SECRET_KEY,
    { expiresIn: "1d" }
  );

  res.cookie("refreshToken", refreshToken, {
  httpOnly: true,
  sameSite: "Lax",
  secure: false,
  path: "/",
  domain:'localhost',
  maxAge: 24 * 60 * 60 * 1000,
});

  await Auth.findOneAndUpdate(
    { userId: user._id },
    { refreshToken: refreshToken, isActivate: true },
    { upsert: true, new: true }
  );
   const profile = await Profile.findOne({ userId: user._id });
  res.status(200).json({ accessToken: accessToken, msg: "Login Successful",profile });
};

const refreshToken = async (req, res) => {
  const token = req.cookies?.refreshToken;
  
  if (!token) {
    return res.status(401).json({ msg: "Refresh token missing" });
  }

  jwt.verify(token, process.env.JWT_REFRESH_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const userId = decoded.UserId;
    const email = decoded.Name;

    const accessToken = jwt.sign(
      { UserId: userId, Name: email },
      process.env.JWT_ACCESS_SECRET_KEY,
      {expiresIn: "30m"} 
    );

    return res.status(200).json({ accessToken });
  });
};
const logout = async (req, res) => {
  const token = req.cookies?.refreshToken;
  
  if (token) {
    const userResponse = await Auth.findOneAndUpdate(
      { userId: req.user.userId },
      { isActivate: false },
      { upsert: true, new: true }
    );
    //console.log(req.user, userResponse);
  }
  res.clearCookie("refreshToken", {
    httpOnly: true,
    sameSite: "Lax",
    secure: false,
  });

  return res.status(200).json({ msg: "Logged out successfully" });
};
const deleteuser = async (req,res)=>{
  const {id} = req.params;
  await User.findByIdAndDelete(id);
  res.status(200).json({msg:"User Deleted Succesfully"})
}
module.exports = {
  register,
  login,
  refreshToken,
  logout,
  deleteuser
};

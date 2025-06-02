const bcrypt = require('bcryptjs');
const User = require('../models/user');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Please provide name, email and password' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.status(201).json({ msg: 'User registered successfully', user: { name: user.name, email: user.email } });
};


const login = async(req,res)=>{
  res.send('login')
}
module.exports = {
    register,
    login
}
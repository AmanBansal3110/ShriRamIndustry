const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();
router.get('/', (req, res) => {
  res.send('Hello World');
});
router.post('/signup', async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  // Input validation
  if (!firstname || !lastname || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: 'User already exists' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword
    });
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true, secure: true, path: '/', sameSite: 'None' });
    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/signin', async (req, res) =>{
  const {email, password} = req.body;
  if(!email || !password){
    return res.status(400).json({message: 'All fields are required'});
  }
  try{
  const user = await User.findOne({email});
  if(!user){
    return res.status(400).json({message: 'User does not exist'});
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if(!passwordMatch){
    return res.status(401).json({message: 'Invalid credentials'});
  }
  const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
  res.cookie('token', token, {httpOnly: true, secure: true, path: '/', sameSite: 'None'});
  res.status(200).json({message: 'Login successful', token});
}
  catch(error){ 
    res.status(500).json({message: 'Internal server error'});
  }
});

router.get('/logout', (req, res) =>{
  res.clearCookie('token');
  res.status(200).json({message: 'Logout successful'});
});

router.get('/isLoggedIn', async(req, res) => {
  const token = req.cookies.token;
  try {
    if (!token) {
      return res.status(401).json({ isLoggedIn: false, user: null });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedToken.userId);
    
    res.status(200).json({ isLoggedIn: true, user });
  } catch (error) {
    res.status(401).json({ isLoggedIn: false, user: null });
  }
});

router.delete('/delete', async(req, res)=>{
  const {email} = req.body;
  if(!email){
    return res.status(400).json({message: 'Email is required'});
  }
  try{
    const user = await User.findOne({email});
    if(!user){
      return res.status(400).json({message: 'User does not exist'});
    }
    await User.deleteOne({email});
    res.status(200).json({message: 'User deleted successfully'});
  }catch(error){
    res.status(500).json({message: 'Internal server error'});
  }
})

module.exports = router;
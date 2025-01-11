import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const router = express.Router();

// User Signup
router.post('/signup', async (req, res) => {
    try {
      const { username, password, role } = req.body;
      const user = new User({ username, password, role });
      await user.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


// User Login
router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
  
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '1d',
      });
      res.status(200).json({ token });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

export default router;
import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/contact', async (req, res) => {
  try {
    const { name, phone, message } = req.body;
    
    if (!name || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    const newContact = new Contact({ name, phone, message });
    await newContact.save();
    
    res.status(201).json({ message: 'Message sent successfully!', data: newContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
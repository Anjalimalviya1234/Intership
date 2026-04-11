import express from 'express';
import Student from '../models/Student.js';

const router = express.Router();

router.post('/admission', async (req, res) => {
  try {
    const { name, class: studentClass, phone, course } = req.body;
    
    if (!name || !studentClass || !phone || !course) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    const newStudent = new Student({ name, class: studentClass, phone, course });
    await newStudent.save();
    
    res.status(201).json({ message: 'Admission form submitted successfully!', data: newStudent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/students', async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.delete('/student/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(id);
    
    if (!deletedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
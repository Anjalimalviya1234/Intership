import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
import studentRoutes from './routes/studentRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api', contactRoutes);
app.use('/api', studentRoutes);

app.get('/', (req, res) => {
  res.send('Devi Ahilya Coaching Classes API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
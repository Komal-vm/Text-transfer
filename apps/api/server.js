// filename: server.js
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = 3004;
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables from .env file


app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    console.error('MONGO_URI is missing in the .env file!');
    process.exit(1);  // Exit the application if MONGO_URI is not found
  }

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));  


  
// Define the Message schema and model
const messageSchema = new mongoose.Schema({
    token: { type: String, required: true, unique: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  });
  
const Message = mongoose.model('Message', messageSchema);  


// POST /store - Save message/code and return token
app.post('/store', async(req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const big_token = uuidv4();
  const token = big_token.slice(0,6);
  
  const newMessage = new Message({ token, message });
  await newMessage.save();

  res.json({ token });
});

// GET /retrieve/:token - Fetch message/code by token
app.get('/retrieve/:token', async(req, res) => {
    const { token } = req.params;
    const messageDoc = await Message.findOne({ token });

  if (!messageDoc) {
    return res.status(404).json({ error: 'Invalid or expired token' });
  }

  // Check if the message is older than 5 minutes
  const now = new Date();
  const createdAt = messageDoc.createdAt;
  const diffInMinutes = Math.floor((now - createdAt) / 60000); // ms to mins

  if (diffInMinutes > 59) {
    await Message.deleteOne({ token });
    return res.status(410).json({ error: 'Token expired and message deleted' });
  }

  res.json({ message: messageDoc.message });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;



mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello from momngo db!');
});



app.listen(3000, () => {
  console.log('Server started on port 3000');
});
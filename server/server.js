const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;


const app = require('./app');
const PORT = process.env.PORT || 4400;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

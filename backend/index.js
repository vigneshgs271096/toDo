// app.js
const express = require('express');
const connectDB = require('./db'); // Import the function to connect to MongoDB
const categoryRoutes = require('./routes/categoryRoutes');
const goalRoutes = require('./routes/goalRoutes');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors({
    origin: 'http://localhost:4200' // Replace with your frontend origin
}));

// Middleware
app.use(express.json());

// Mount category routes
app.use('/categories', categoryRoutes);
// Mount goal routes
app.use('/goals', goalRoutes);
// Mount goal routes
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


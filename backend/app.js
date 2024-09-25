const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const routes = require('./Routes');
const authRoutes = require('./Routes/auth');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Security middleware
app.use(helmet());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
// app.use('/auth', authRoutes);
app.use('/', routes);
module.exports = app;
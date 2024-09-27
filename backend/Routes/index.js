const express = require('express');
const router = express.Router();
const authRoutes = require('./auth');
const productRoutes = require('./products');
const categoryRoutes = require('./category');

router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/category', categoryRoutes);
module.exports = router;
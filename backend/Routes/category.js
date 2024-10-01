const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const Category = require('../models/category');
const Product = require('../models/products');

// Input validation
const validateCategory = [
  check('name').notEmpty().withMessage('Name is required'),
  check('description').optional().isString(),
  check('image').optional().isString(),
];

// Create a new category
router.post(
  '/',
  validateCategory,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, image } = req.body;
    try {
      const category = await Category.create({
        name,
        description,
        image,
      });
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

// Fetch a category by ID
router.get('/:categoryId', async (req, res) => {
  const { categoryId } = req.params;
  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a category by ID
router.put(
  '/:categoryId',
  validateCategory,
  async (req, res) => {
    const { categoryId } = req.params;
    const { name, description, image } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const category = await Category.findByIdAndUpdate(
        categoryId,
        { name, description, image },
        { new: true, runValidators: true }
      );
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

// Delete a category by ID
router.delete('/:categoryId', async (req, res) => {
  const { categoryId } = req.params;
  try {
    const category = await Category.findByIdAndDelete(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a product to a category
router.post('/:categoryId/products/:productId', async (req, res) => {
  const { categoryId, productId } = req.params;
  try {
    const category = await Category.findById(categoryId);
    const product = await Product.findById(productId);

    if (!category || !product) {
      return res.status(404).json({ message: 'Category or Product not found' });
    }

    if (!category.products.includes(productId)) {
      category.products.push(productId);
      await category.save();
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all products in a category
router.get('/:categoryId/products', async (req, res) => {
  const { categoryId } = req.params;
  try {
    const category = await Category.findById(categoryId).populate('products');
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ name: category.name, products: category.products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

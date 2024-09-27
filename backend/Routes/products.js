const express = require('express');
const router = express.Router();
const Product = require('../models/products');

router.get('/', (req, res) => {
  res.send('Hello i am products');
});

router.post('/', async (req, res) => {
  const {name, description, price, image} = req.body;
  try{
    const product = await Product.create({
      name, 
      description,
      price,
      image
    })
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

module.exports = router;
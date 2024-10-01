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

router.put('/:productId', async (req, res)=>{
  const {productId} = req.params;
  const {name, description, price, image} = req.body;
  try{
    const product = await Product.findByIdAndUpdate(productId, {name, description, price, image}, {new: true});
    if(!product){
      return res.status(404).json({message: 'Product not found'});
    }
    res.status(200).json(product);
  }catch(error){
    res.status(500).json({message: error.message});
  }
})

router.delete('/:productId', async (req, res)=>{
  const {productId} = req.params;
  try{
    const product = await Product.findByIdAndDelete(productId);
    res.status(200).json({message: 'Product deleted successfully'});
  }catch(error){
    res.status(500).json({message: error.message});
  }
})

module.exports = router;
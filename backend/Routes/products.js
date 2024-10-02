const express = require('express');
const router = express.Router();
const Product = require('../models/products');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const verification = require('../middlewares/verification');

router.get('/', (req, res) => {
  res.send('Hello i am products my name is Aman Bansal');
});

router.post('/', async (req, res) => {
  const {name, description, price, image, size, total_quantity, color} = req.body;
  try{
    const product = await Product.create({
      name, 
      description,
      price,
      image,
      size,
      total_quantity,
      color
    })
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

router.put('/:productId', async (req, res)=>{
  const {productId} = req.params;
  const {name, description, price, image, size, total_quantity, color} = req.body;
  try{
    const product = await Product.findByIdAndUpdate(productId, {name, description, price, image, size, total_quantity, color}, {new: true});
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



// products using by user provided by Aman Bansal
router.post('/:productId/wishlist',verification, async (req, res)=>{
  const {productId} = req.params;
  const userId = req.user;
  try{
    const product = await Product.findById(productId);
    if(!product){
      return res.status(404).json({message: 'Product not found'});
    }
    const user = await User.findById(userId);
    if(!user){
      return res.status(404).json({message: 'User not found'});
    }
    user.wishlist.push(productId);
    await user.save();
    res.status(200).json({message: 'Product added to wishlist successfully', user});
  }catch(error){
    res.status(500).json({message: error.message});
  }
})

router.post('/:productId/cart', verification, async (req, res) => {
  const { productId } = req.params;
  try {
    const userId = req.user;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const cartItem = user.products_cart.find(item => item.product.toString() === productId);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      user.products_cart.push({ product: productId, quantity: 1 });
    }
    await user.save();
    res.status(200).json({ message: 'Product added to cart successfully', user });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ message: 'Failed to add product to cart', error: error.message });
  }
})

router.get('/cart', verification, async (req, res) => {
  const userId = req.user;
  try {
    const user = await User.findById(userId).populate('products_cart.product');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const cartItems = user.products_cart.map(item => ({
      product: item.product,
      quantity: item.quantity
    }));
    res.status(200).json({ cartItems })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

router.post('/cart/decrease/:productId', verification, async (req, res) => {
  const { productId } = req.params;
  const userId = req.user;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const cartItem = user.products_cart.find(item => item.product.toString() === productId);
    if (cartItem) {
      cartItem.quantity -= 1;
      if (cartItem.quantity === 0) {
        user.products_cart = user.products_cart.filter(item => item.product.toString() !== productId);
      }
    } else {
      return res.status(404).json({ message: 'Product not found in cart' });
    }
    await user.save();
    res.status(200).json({ message: 'Product quantity decreased successfully', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

router.post('/cart/increase/:productId', verification, async (req, res) => {
  const { productId } = req.params;
  const userId = req.user;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    } 
    const product = await Product.findById(productId);
    if(!product){
      return res.status(404).json({message: 'Product not found'});
    }
    const cartItem = user.products_cart.find(item => item.product.toString() === productId);
    if(cartItem){
      cartItem.quantity += 1;
    } 
    await user.save();
    res.status(200).json({message: 'Product quantity increased successfully', user});
  }
  catch(error){
    res.status(500).json({message: error.message});
  }
})

router.delete('/cart/:productId', verification, async (req, res) => {
  const { productId } = req.params;
  const userId = req.user;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    } 
    user.products_cart = user.products_cart.filter(item => item.product.toString() !== productId);
    await user.save();
    res.status(200).json({ message: 'Product removed from cart successfully', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
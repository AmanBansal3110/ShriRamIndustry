const express = require('express');
const router = express.Router();
const Category = require('../models/category');
const Product = require('../models/products');

router.post('/', async (req, res)=>{
    const {name, description, image} = req.body;
    try{
        const category = await Category.create({
            name,
            description,
            image
        })
        res.status(201).json(category);
    }catch(error){
        res.status(500).json({message: error.message});
    }
})

router.get('/:categoryId', async (req, res)=>{
    const {categoryId} = req.params;
    try{
        const category = await Category.findById(categoryId);
        if(!category){
            return res.status(404).json({
                message: 'No any category found'
            })
        }
        res.status(200).json(category);
    }catch(error){
        res.status(500).json({message: error.message});
    }
})

router.get('/', async (req, res)=>{
    try{
        const categories = await Category.find();
        console.log(categories);
        res.status(200).json(categories);
    }catch(error){
        res.status(500).json({message: error.message});
    }
})

router.put('/:categoryId', async (req, res) => {
    const { categoryId } = req.params;
    const { name, description, image } = req.body;
    try {
        const category = await Category.findByIdAndUpdate(
            categoryId,
            { name, description, image },
            { new: true, runValidators: true }
        );
        if (!category) {
            return res.status(404).json({
                message: 'Category not found'
            });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:categoryId', async (req, res)=>{
    const {categoryId} = req.params;
    try{
        const category = await Category.findByIdAndDelete(categoryId);
        res.status(200).json({message: 'Category deleted successfully'});
    }catch(error){
        res.status(500).json({message: error.message});
    }
})
router.post('/:categoryId/products/:productId', async (req, res) => {
    const { categoryId, productId } = req.params; // Correctly destructuring categoryId and productId
    try {
        // Find the category by ID
        const category = await Category.findById(categoryId);
        // Find the product by ID
        const product = await Product.findById(productId);

        // Check if both category and product exist
        if (!category || !product) {
            return res.status(404).json({
                message: 'Category or product not found'
            });
        }

        // Push the product ID to the category's products array
        if (!category.products.includes(productId)) {
            category.products.push(productId); // Prevent duplicates
            await category.save(); // Save the updated category
        }

        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




module.exports = router;
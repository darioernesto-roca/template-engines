const express = require('express');
const router = express.Router();

const Product = require("../models/Products");
const Category = require("../models/Categories");



// Insert data
router.post('/', async (req, res) => {
    try {
        const { productData, categoryData } = req.body;

        if (productData && productData.length > 0) {
            await Product.insertMany(productData);
        }

        if (categoryData && categoryData.length > 0) {
            await Category.insertMany(categoryData);
        }

        res.send('Data inserted successfully!');
    } catch (err) {
        res.status(500).send('Server error: ' + err.message);
    }
});



module.exports = router;
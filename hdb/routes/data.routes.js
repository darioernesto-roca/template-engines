const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Create product
router.post('/add', (req, res) => {
  let sql = 'INSERT INTO `table-products` SET ?';
  let query = db.query(sql, req.body, (err, product) => {
    if(err) throw err;
    res.send('Product added...');
  });
});

// Read products
router.get('/get', (req, res) => {
  let sql = 'SELECT * FROM `table-products`';
  let query = db.query(sql, (err, products) => {
    if(err) throw err;
    res.send(products);
  });
});

// Update product
router.put('/update/:id', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send('No data provided to update.');
  }
  let sql = `UPDATE \`table-products\` SET ? WHERE id = ${req.params.id}`;
  let query = db.query(sql, req.body, (err, product) => {
    if (err) throw err;
    res.send('Product updated...');
  });
});

// Delete product
router.delete('/delete/:id', (req, res) => {
  let sql = `DELETE FROM \`table-products\` WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, product) => {
    if(err) throw err;
    res.send('Product deleted...');
  });
});

// Create category
router.post('/category/add', (req, res) => {
  let sql = 'INSERT INTO categories SET ?';
  let query = db.query(sql, req.body, (err, category) => {
    if (err) throw err;
    res.send('Category added...');
  });
});

// Read categories
router.get('/category/get', (req, res) => {
  let sql = 'SELECT * FROM categories';
  let query = db.query(sql, (err, categories) => {
    if (err) throw err;
    res.send(categories);
  });
});

// Update category
router.put('/category/update/:id', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send('No data provided to update.');
  }
  let sql = `UPDATE categories SET ? WHERE id = ${req.params.id}`;
  let query = db.query(sql, req.body, (err, result) => {
    if (err) throw err;
    res.send('Category updated...');
  });
});

// Delete category
router.delete('/category/delete/:id', (req, res) => {
  let sql = `DELETE FROM categories WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Category deleted...');
  });
});

module.exports = router;

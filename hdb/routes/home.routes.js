const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", (req, res) => {
  let sql = 'SELECT * FROM `table-products`';
  let query = db.query(sql, (err, products) => {
    if(err) throw err;
    res.render("home", {
      title: "Kytes Swimsuits",
      pageHeader: "Kytes Swimsuits - Handlebars Version",
      products: products
    });
  });
});

module.exports = router;

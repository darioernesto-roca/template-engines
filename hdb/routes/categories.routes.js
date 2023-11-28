const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", (req, res) => {
  let sql = 'SELECT * FROM `categories`';
  let query = db.query(sql, (err, categories) => {
    if(err) throw err;
    res.render("categories", {
      title: "Categories | Kytes Swimsuits",
      pageHeader: "Categories - Handlebars Version",
      categories: categories
    });
  });
});

module.exports = router;
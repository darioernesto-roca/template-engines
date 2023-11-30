const express = require("express");
const router = express.Router();
const Product = require("../models/Products");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.render("home", {
      title: "Kytes Swimsuits",
      pageHeader: "Kytes Swimsuits - EJS Version",
      products,
    });
  }
  catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Issue. Check logs for details.");
  }
});

module.exports = router;
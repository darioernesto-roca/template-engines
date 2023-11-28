const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("categories", {
    title: "Categories | Kytes Swimsuits",
    pageHeader: "Categories - EJS Version",
  });
});

module.exports = router;
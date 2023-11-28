const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", {
    title: "Kytes Swimsuits",
    pageHeader: "Kytes Swimsuits - Handlebars Version",
  });
});

module.exports = router;

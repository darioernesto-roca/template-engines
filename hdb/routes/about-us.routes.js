const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("about-us", {
    title: "About Us | Kytes Swimsuits",
    pageHeader: "About Us - Handlebars Version",
  });
});

module.exports = router;
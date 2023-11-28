const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("contact", {
    title: "Contact | Kytes Swimsuits",
    pageHeader: "Contact Us - Handlebars Version",
  });
});

module.exports = router;
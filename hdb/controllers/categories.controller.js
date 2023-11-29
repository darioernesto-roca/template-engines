const db = require("../config/db");

exports.renderCategories = (req, res) => {
  let sql = 'SELECT * FROM `categories`';
  let query = db.query(sql, (err, categories) => {
    if(err) throw err;
    res.render("categories", {
      title: "Categories | Kytes Swimsuits",
      pageHeader: "Categories - Handlebars Version",
      categories: categories
    });
  });
}
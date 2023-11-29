exports.aboutUsController = (req, res) => {
  res.render("about-us", {
    title: "About Us | Kytes Swimsuits",
    pageHeader: "About Us - Handlebars Version",
  });
}
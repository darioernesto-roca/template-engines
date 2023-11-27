require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const PORT = process.env.PORT || 3030;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));


// EJS settings
app.use(expressLayouts);
app.set('view engine', 'ejs');


app.listen(PORT, function() {
    console.log(`🌎 Server listening on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.render('home', { title: 'Kytes Swimsuits' });
});

app.get('/categories', (req, res) => {
  res.render('categories', { title: 'Categories | Kytes Swimsuits' });
});

app.get('/about-us', (req, res) => {
  res.render('about-us', { title: 'About Us | Kytes Swimsuits' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact | Kytes Swimsuits' });
});
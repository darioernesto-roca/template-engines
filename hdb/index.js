require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Handlebars settings.
const hbs = exphbs.create({
    extname: '.hbs',
    defaultLayout: 'index',
    layoutsDir: 'views/layouts',
    partialsDir: 'views/partials',
});

// Set Handlebars as the default template engine.
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

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
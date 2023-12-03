require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4040;
// const pug = require('pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));


// Pug settings
app.set('view engine', 'pug');


app.listen(PORT, function() {
    console.log(`🌎 Server listening on http://localhost:${PORT}`);
});

const fs = require('fs');
let rawData = fs.readFileSync('data.json');
let data = JSON.parse(rawData);

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Kytes Swimsuits',
    pageHeader: 'Kytes Swimsuits - Pug Version',
    data: data,
  });
});

app.get('/categories', (req, res) => {
  res.render('categories', {
    title: 'Categories | Kytes Swimsuits',
    pageHeader: 'Categories - Pug Version',
    data: data,
  });
});

app.get('/about-us', (req, res) => {
  res.render('about-us', {
    title: 'About Us | Kytes Swimsuits',
    pageHeader: 'About Us - Pug Version',
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact | Kytes Swimsuits',
    pageHeader: 'Contact Us - Pug Version',
  });
});

/* Importing modules */
const express = require('express');
app = express();

/* Module to create paths to files in the server */
const path = require('path');

/* Module to read and write local files */
const fs = require('fs');

/* If there's no port environment variable, use 3002 */
const port = process.env.PORT || 3002;

/* Module to convert markdown to HTML */
const showdown = require('showdown');
const converter = new showdown.Converter();

/* Setting up EJS and it's views folder */
app.set('view engine', 'ejs');
app.set('views', './src/views');

/* Declaring static folder */
app.use(express.static('./public'));

/* Opening README and converting to HTML */
const markdown = fs.readFileSync('README.md').toString();
const html = converter.makeHtml(markdown);
console.log(html);

/* Creating index */
app.get('/', (req, res) => {
    res.render('main/index.ejs', {html});
});

/* Running server */
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
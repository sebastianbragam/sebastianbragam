/* Module to create paths to files in the server */
const path = require('path');

/* Module to read and write local files */
const fs = require('fs');

/* Module to convert markdown to HTML */
const showdown = require('showdown');
const converter = new showdown.Converter();

/* Module to export */
let mainController = {

    index: function (req, res) {

        /* Opening README and converting to HTML */
        const markdown = fs.readFileSync('README.md').toString();
        var html = converter.makeHtml(markdown);

        /* Showing info until break in markdown */
        html = html.split('<!-- end -->');
        const aboutMe = html[0];
        const technologies = html[1];
        const projects = html[2];

        /* Render index with markdown converted to html */
        res.render('main/index', {aboutMe, technologies, projects});

    }

};

module.exports = mainController;
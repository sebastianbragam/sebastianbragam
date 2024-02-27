/* Importing modules */
const express = require('express');
app = express();

/* Routing modules */
const mainRoutes = require('./routers/main');

/* If there's no port environment variable, use 3002 */
const port = process.env.PORT || 3002;

/* Setting up EJS and it's views folder */
app.set('view engine', 'ejs');
app.set('views', './src/views');

/* Declaring static folder */
app.use(express.static('./public'));

/* Creating index */
app.get('/', mainRoutes);

/* Running server */
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
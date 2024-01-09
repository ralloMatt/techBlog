const path = require('path');
const express = require('express');
const routes = require('./controllers');
const exphbs = require('express-handlebars'); // for my html pages which are handlebars

const app = express();
const PORT = process.env.PORT || 3001; // allows for deployment on heroku and on localhost

const hbs = exphbs.create(); // handle bar engine

// Tell express which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(PORT, () => console.log('Now listening...'));
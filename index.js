const express = require('express');
const path = require('path');
const routes = require('./routes');
const apodService = require('./services/nasaService');
const spotifyService = require('./services/spotifyService');



const app = express();
const port =  process.env.PORT || 3000;

//settings for express app
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//set up folder for static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


app.listen(port, () => console.log(`Listening on http://localhost:${port}`));


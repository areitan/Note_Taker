// require express and path
const express = require('express');
const path = require('path');

// api route
const api = require('./routes/route.js');

// set port information
const PORT = process.env.PORT || 3001;

// set app as express
const app = express();

// import middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));


// GET routh for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET route for note taker page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


// redirect for invalid requests?


// port is listening
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

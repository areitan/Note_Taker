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

app.use(express.static('public'));
app.use('/api', api);

// GET index.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET route notes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// port is listening
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

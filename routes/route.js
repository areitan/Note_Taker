// modeled off wk 11 mini-project exercise 28
const notes = require('express').Router();
const fs = require('fs');

// UUID package
const { v4: uuidv4 } = require('uuid');

//  GET Route for getting notes
notes.get('/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (error, data) => {
    res.json(JSON.parse(data))
  })
}
);

// POST Route for submitting notes
notes.post('/notes', (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    };

    fs.readFile('./db/db.json', 'utf8', (error, data) => {
      console.log(data);
      let notes = JSON.parse(data);
      notes.push(newNote);

      fs.writeFile('./db/db.json', JSON.stringify(notes), (error, data) => {
        res.json(newNote);
      });
    });
  } else {
    res.json('Error posting note');
  }
});

module.exports = notes;
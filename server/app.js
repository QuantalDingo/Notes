const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Note = require('../src/model/Note')

const app = express();
app.use(bodyParser.json());

const mongodb = 'mongodb://localhost:27017/notes';
mongoose.connect(mongodb);

app.get('/notes', (req, res) => {
    Note.find().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    const note = new Note({
        title: req.body.title,
        text: req.body.text,
        createdAt: new Date(),
        author: req.body.author
    })

    note.save().then(data => app.send(data));
});

app.delete('/notes/:id', (req, res) => {
    Note.findById(req.params.id).remove().then(data => res.send(data));
})

const server = app.listen(8080, () => {
    console.log(`Server is up and running on port 8080`);
});
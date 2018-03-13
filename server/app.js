const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require("../etc/config.js");
const Note = require('../src/models/Note');
const User = require('../src/models/User');

mongoose.Promise = global.Promise;

const app = express();
app.use(bodyParser.json());

const mongodb = `${config.db.db}://${config.db.host}:${config.db.port}/${config.db.table}`;
mongoose.connect(mongodb)
	.then(() => console.log('Connection succesful!'))
	.catch((err) => console.log(err));

app.get('/notes', (req, res) => {
	Note.find().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
	const newNote = new Note({
		title: req.body.title,
		text: req.body.text,
		createdAt: new Date()
	});

	newNote.save().then(data => app.send(data));
});

app.delete('/notes/:id', (req, res) => {
	Note.findById(req.params.id).remove().then(data => res.send(data));
})

const server = app.listen(config.port, () => {
	console.log(`Server is up and running on port ${config.port}`);
});
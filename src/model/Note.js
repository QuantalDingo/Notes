const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: String,
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    author: { type: String, required: true }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;

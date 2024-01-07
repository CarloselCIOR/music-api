const mongoose = require('mongoose');

let songSchema = new mongoose.Schema({
    titulo: {type: String},
    artista: {type: String},
    album: {type: String},
    genero: {type: String},
    duracion: {type: String},
    anho: {type: Number},
    url: {type: String},
});

module.exports = mongoose.model('Song', songSchema, 'song');
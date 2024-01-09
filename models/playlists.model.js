const mongoose = require('mongoose');

let playlistSchema = new mongoose.Schema({
    usuario_email: {type: String},
    nombre: {type: String},
    descripcion: {type: String},
    canciones: {type: String}
});

module.exports = mongoose.model('Playlist', playlistSchema, 'playlist');
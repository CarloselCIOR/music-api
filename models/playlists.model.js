const mongoose = require('mongoose');

let playlistSchema = new mongoose.Schema({
    usuario_email: {type: String},
    nombre: {type: String},
    descripcion: {type: String},
    canciones: [{
        cancion_id: {type: String}
    }]
});

module.exports = mongoose.model('Playlist', playlistSchema, 'playlist');
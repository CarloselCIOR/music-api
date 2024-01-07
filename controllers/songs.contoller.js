const Song = require('../models/songs.model');

// Consultar todos los canciones
exports.getSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        return res.status(200).json({
                message: 'Canciones obtenidas con éxito',
                data: songs
            }
        );
    } catch (error) {
        return res.status(500).json({
                message: 'Error al consultar canciones',
                data: error
            }
        );
    }
};

// Consultar canción por id
exports.getSongById = async (req, res) => {
    const songId = req.params.songId;
    try {
        const song = await Song.findById(songId);
        return res.status(200).json({
                message: 'Canción obtenida con éxito',
                data: song
            }
        );
    } catch (error) {
        return res.status(500).json({
                message: 'Error al consultar cancion',
                data: error
            }
        );
    }
};

// Crear cancion
exports.newSong = async (req, res) => {
    try {
        const { titulo, artista, album, genero, duracion, anho, url } = req.body;
        const newSong = new Song({ titulo, artista, album, genero, duracion, anho, url });
        await newSong.save();

        return res.status(200).json({
                message: 'Canción creada con éxito',
                data: newSong
            }
        );
    } catch (error) {
        return res.status(500).json({
                message: 'Error al crear cancion',
                data: error
            }
        );
    }
};

// Actualizar cancion
exports.updateSong = async (req, res) => {
    const songId = req.params.songId;
    const newData = req.body;
    try {
        const updatedSong = await Song.findByIdAndUpdate(songId, newData, { new: true });
        return res.status(201).json({
                message: 'Actualizar cancion por ID',
                data: updatedSong
            }
        );
    } catch (error) {
        return res.status(500).json({
                message: 'Error al actualizar cancion',
                data: error
            }
        );
    }
};

// Eliminar cancion
exports.deleteSong = async (req, res) => {
    const songId = req.params.songId;
    try {
        await Song.findByIdAndDelete(songId);
        return res.status(201).json({
                message: 'Cancion eliminada con éxito'
            }
        );
    } catch (error) {
        console.log((error));
        return res.status(500).json({
                message: 'Error al eliminar cancion',
                data: error
            }
        );
    }
};

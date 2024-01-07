const Playlist = require('../models/playlists.model');

// Consultar todas las playlist
exports.getPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find();
        return res.status(200).json({
                message: 'Playlist obtenidas con éxito',
                data: playlists
            }
        );
    } catch (error) {
        return res.status(500).json({
                message: 'Error al consultar playlist',
                data: error
            }
        );
    }
};

// Consultar playlist por id
exports.getPlaylistById = async (req, res) => {
    const playlistId = req.params.playlistId;
    try {
        const playlist = await Playlist.findById(playlistId);
        return res.status(200).json({
                message: 'Playlist obtenida con éxito',
                data: playlist
            }
        );
    } catch (error) {
        return res.status(500).json({
                message: 'Error al consultar playlist',
                data: error
            }
        );
    }
};

// Crear playlist
exports.newPlaylist = async (req, res) => {
    try {
        const { usuario_email, nombre, descripcion, canciones } = req.body;
        const newPlaylist = new Playlist({ usuario_email, nombre, descripcion, canciones });
        await newPlaylist.save();

        return res.status(200).json({
                message: 'Playlist creada con éxito',
                data: newPlaylist
            }
        );
    } catch (error) {
        return res.status(500).json({
                message: 'Error al crear playlist',
                data: error
            }
        );
    }
};

// Actualizar playlist
exports.updatePlaylist = async (req, res) => {
    const playlistId = req.params.playlistId;
    const newData = req.body;
    try {
        const updatedPlaylist = await Playlist.findByIdAndUpdate(playlistId, newData, { new: true });
        return res.status(201).json({
                message: 'Actualizar playlist por ID',
                data: updatedPlaylist
            }
        );
    } catch (error) {
        return res.status(500).json({
                message: 'Error al actualizar playlist',
                data: error
            }
        );
    }
};

// Eliminar playlist
exports.deletePlaylist = async (req, res) => {
    const playlistId = req.params.playlistId;
    try {
        await Playlist.findByIdAndDelete(playlistId);
        return res.status(201).json({
                message: 'Playlist eliminada con éxito'
            }
        );
    } catch (error) {
        console.log((error));
        return res.status(500).json({
                message: 'Error al eliminar playlist',
                data: error
            }
        );
    }
};

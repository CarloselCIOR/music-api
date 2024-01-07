const express = require('express');
const router = express.Router();
const playlistController =  require('../controllers/playlist.contoller');
const authMiddleware = require('../utils/auth.middleware');

router.get('/', playlistController.getPlaylists);

router.get('/:playlistId', playlistController.getPlaylistById);

router.post('/',authMiddleware.authenticateToken, playlistController.newPlaylist);

router.put('/:playlistId',authMiddleware.authenticateToken, playlistController.updatePlaylist);

router.delete('/:playlistId',authMiddleware.authenticateToken, playlistController.deletePlaylist);

module.exports = router;
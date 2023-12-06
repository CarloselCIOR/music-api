const express = require('express');
const router = express.Router();
const songsController =  require('../controllers/songs.contoller');
const authMiddleware = require('../utils/auth.middleware');

router.get('/', songsController.getSongs);

router.get('/:songId', songsController.getSongById);

router.post('/',authMiddleware.authenticateToken, songsController.newSong);

router.put('/:songId',authMiddleware.authenticateToken, songsController.updateSong);

router.delete('/:songId',authMiddleware.authenticateToken, songsController.deleteSong);

module.exports = router;
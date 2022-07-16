const SongController = require('../controllers/songs.controller');

module.exports = (app) => {
    app.get('/api', SongController.findAllSongs);
    app.post('/api/songs', SongController.createSong);
    app.get('/api/songs/:id', SongController.findSongById);
    app.put('/api/songs/update/:id', SongController.updateSong);
    app.delete('/api/songs/:id', SongController.deleteSong);
    
}

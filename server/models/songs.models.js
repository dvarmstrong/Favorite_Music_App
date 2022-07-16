const mongooose = require('mongoose');
const SongsSchema = new mongooose.Schema({
    title: {
        type: String,
        required: [true, 'Song Title is required'],
    },
    artist: {
        type: String,
        required: [true, 'Artist is required'],
    },
    album: {
        type: String,
        required: [true, 'Album is required'],
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
    },
    year: {
        type: Number,
        required: [true, 'Year is required'],
        min: [1900, 'Year must be at least 1900'],
        max: [2022, 'Year must be at most 2022'],
    },

})


const Songs = mongooose.model('Songs', SongsSchema);
module.exports = Songs;
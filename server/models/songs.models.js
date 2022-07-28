const mongooose = require('mongoose');
const SongsSchema = new mongooose.Schema({
    title: {
        type: String,
        required: [true, 'Song Title is required'],
        minlength: [3, 'Song Title must be at least 3 characters long']
    },
    artist: {
        type: String,
        required: [true, 'Artist is required'],
        minlength: [3, 'Artist must be at least 3 characters long']
    },
    album: {
        type: String,
        required: [true, 'Album is required'],
        minlength: [3, 'Album must be at least 3 characters long']
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
        minlength: [3, 'Genre must be at least 3 characters long']
    },
    year: {
        type: Number,
        required: [true, 'Year is required'],
        min: [1900, 'Year must be at least 1900'],
        max: [2022, 'Year must be at most 2022']
    },
    


}, { timestamps: true });
    







const Songs = mongooose.model('Songs', SongsSchema);
module.exports = Songs;
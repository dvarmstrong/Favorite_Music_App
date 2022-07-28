const Song = require('../models/songs.models');



module.exports.createSong = (req, res) => {
    const {title, artist, album, genre, year} = req.body;
    Song.create({title, artist, album, genre, year})
    .then(song => {
        res.json(song);
    })
    .catch(err =>res.status(400).json(err))
        
    };


module.exports.findAllSongs = (req, res) => {
    Song.find({})
        .then((songs) => {
            console.log(songs);
            res.json({songs: songs});
        })
        .catch((err) => {
            console.log("Error:", err);
            res.json({message:'Something went wrong', error: err});
        });
}

module.exports.findSongById = (req, res) => {
    Song.findOne({_id: req.params.id})
        .then(oneSong => {
            res.json({oneSong: oneSong});
        })
        .catch((err) => {
            res.json( err);
        })
}

module.exports.updateSong = (req, res) => {
    Song.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedSong => {
            res.json({updatedSong: updatedSong});
        })
        .catch((err) => {
            res.json({message:'Something went wrong', error: err});
        })
}

module.exports.deleteSong = (req, res) => {
    Song.findOneAndDelete({_id: req.params.id})
        .then(deletedSong => {
            res.json({deletedSong: deletedSong});
        })
        .catch((err) => {
            res.json({message:'Something went wrong', error: err});
        })
}
    

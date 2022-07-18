import React, {useState} from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';

const SongForm =(props) => {
    const {songList, setSongList} = props;

    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/songs", {
            title,
            artist,
            album,
            genre,
            year
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            
            setSongList([...songList, res.data]);
            setTitle("");
            setArtist("");
            setAlbum("");
            setYear("");
            setGenre("");
        })
        .catch((err) => {
            console.log(err);
        });
        
     
    }

    return (
        <Container>
            <form onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3">
                    <div>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Title" value={title} name="title"  onChange={(e) => setTitle(e.target.value)}v/>
                    </div>
                    <div>
                        <Form.Label>Artist</Form.Label>
                        <Form.Control type="text" placeholder="Artist" value={artist} name="artist" onChange={(e) => setArtist(e.target.value)} />
                    </div>
                    <div>
                        <Form.Label>Album</Form.Label>
                        <Form.Control type="text" placeholder="Album" value={album} name ="album" onChange={(e) => setAlbum(e.target.value)} />
                    </div>
                    <div>
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="number" placeholder="Year" value={year} name ="year" onChange={(e) => setYear(e.target.value)} />
                    </div>
                    <div>
                        <Form.Label>Genre</Form.Label>
                        <Form.Control type="text" placeholder="Genre" value={genre} name ="genre" onChange={(e) => setGenre(e.target.value)} />
                    </div>
                    <Button variant="primary" type="submit">Submit</Button>

                </Form.Group>
            </form>
        </Container>
    )
}



    
    export default SongForm;

import React, {useState} from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';

const SongForm =(props) => {
    const {songList, setSongList} = props;

    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [error, setError] = useState({});

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
            // console.log(res);
            console.log(res.data);
            
            setSongList([...songList, res.data]);
            setTitle("");
            setArtist("");
            setAlbum("");
            setYear("");
            setGenre("");
        })
        .catch((err) => {
            console.log(err)
            console.log(err.response.data.errors)
            setError(err.response.data.errors);
            
            // const errorResponse = err.response.data.error;
            // const errorArr = [];
            // for (const key of Object.keys(errorResponse)) {
            //         errorArr.push(errorResponse[key].message);
            // }
            // console.log("ERROR ARRAY", errorArr);
            // setError(errorArr);
            

        });
        
     console.log("This error", error)
    }

    return (
        <Container>
        <NavBar bg="light" expand="lg">
            <NavBar.Brand href="#Home">Favortie Music App</NavBar.Brand>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
        </NavBar>
            <form onSubmit={onSubmitHandler}>
            {/* {error.map((err, index) => <p key={index}>{err}</p>)} */}
                
                 <Form.Group className="mb-3">

                    <div>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Title" value={title} name="title"  onChange={(e) => setTitle(e.target.value)}v/>
                        {error.title ? <p>{error.title.message}</p> : null}
                    </div>
                    <div>
                        <Form.Label>Artist</Form.Label>
                        <Form.Control type="text" placeholder="Artist" value={artist} name="artist" onChange={(e) => setArtist(e.target.value)} />
                        {error.artist ? <p>{error.artist.message}</p> : null}
                    </div>
                    <div>
                        <Form.Label>Album</Form.Label>
                        <Form.Control type="text" placeholder="Album" value={album} name ="album" onChange={(e) => setAlbum(e.target.value)} />
                        {error.album ? <p>{error.album.message}</p> : null}
                    </div>
                    <div>
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="number" placeholder="Year" value={year} name ="year" onChange={(e) => setYear(e.target.value)} />
                        {error.year ? <p>{error.year.message}</p> : null}
                    </div>
                    <div>
                        <Form.Label>Genre</Form.Label>
                        <Form.Control type="text" placeholder="Genre" value={genre} name ="genre" onChange={(e) => setGenre(e.target.value)} />
                        {error.genre ? <p>{error.genre.message}</p> : null}
                    </div>
                    <Button variant="primary" type="submit">Submit</Button>

                </Form.Group>
            </form>
        </Container>
    )
}



    
    export default SongForm;

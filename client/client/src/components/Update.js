import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";


const Update = (props) => {

    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/songs/${id}`)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title);
                setArtist(res.data.artist);
                setAlbum(res.data.album);
                setYear(res.data.year);
                setGenre(res.data.genre);
            })
            .catch(err => console.log(err));
    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/songs/update/${id}`, {
            title,
            artist,
            album,
            year,
            genre
        })
            .then(res => {
                console.log(res.data);
                navigate("/");
            })
            .catch(err => console.log(err));

    }

    return (
        <div>
            <h1>Update Song</h1>
            <form onSubmit={Update}>
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
        </div>
    )
    }

    export default Update;

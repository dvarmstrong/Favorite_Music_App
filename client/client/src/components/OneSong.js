import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";


const OneSong = (props) => {
    const [song, setSong] = useState({});
    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/songs/${id}`)
        .then((res) => {
            console.log(res.data);
            setSong(res.data);
        })
        .catch((err) => console.log(err.response));

    }, []);

    return (
        <div>

            <h2>Title: {song.title}</h2>
            <h2>Artist:{song.artist}</h2>
            <Link to={"/"}>Home</Link>

        </div>
            
                
            
            
    )
};

export default OneSong;
    

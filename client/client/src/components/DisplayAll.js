import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const DisplayAll = (props) => {
  const {  removeFromDom, songList, setSongList } = props;

  const deleteSong = (songId) => {
    axios.delete(`http://localhost:8000/api/songs/delete/${songId}`)
      .then(res => {
        console.log(res.data);
        removeFromDom(songId);
      }).catch(err => console.log(err));
  
  }
  

  useEffect(() => {
    axios
      .get("http://localhost:8000/api")
      .then((res) => {
        console.log(res.data);
        setSongList(res.data.songs);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>My Songs</h1>
      <Table striped bordered hover size="md">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
           <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {songList.map((songList, index) => {
          
          return (
            <tr key={index}>
              <td><Link to={"/song/:id"}>{songList.title}</Link></td>
              <td>{songList.artist}</td>
              <td>{songList.album}</td>
              <td><Link to={"/update/:id"}>Edit</Link>
              <button onClick={() => deleteSong(songList._id)}>Delete</button></td>
          
            </tr>
          );
        }
        )}
          </tbody>
          </Table> 

        </div>
  );
}



             
              
              

    
    
      
        




     
        


export default DisplayAll;

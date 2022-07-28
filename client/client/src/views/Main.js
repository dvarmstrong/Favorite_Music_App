import React, {useState } from 'react'

import SongForm from '../components/SongForm'
import DisplayAll from '../components/DisplayAll'

const Main = (props) => {
    const [songList, setSongList] = useState([]);

    const removeFromDom = (songId) => {
        setSongList(songList.filter(song => song._id !== songId));
    }

    

    return (
        <div>
            <SongForm songList={songList} setSongList={setSongList} />
            <DisplayAll songList={songList} setSongList={setSongList} removeFromDom={removeFromDom} />
        </div>
    );
};

export default Main;



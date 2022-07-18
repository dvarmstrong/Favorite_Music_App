import React, {useState } from 'react'

import SongForm from '../components/SongForm'
import DisplayAll from '../components/DisplayAll'

const Main = (props) => {
    const [songList, setSongList] = useState([]);

    

    return (
        <div>
            <SongForm songList={songList} setSongList={setSongList} />
            <DisplayAll songList={songList} setSongList={setSongList} />
        </div>
    );
};

export default Main;



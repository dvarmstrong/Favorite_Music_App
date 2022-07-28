import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import OneSong from './components/OneSong';
import Update from './components/Update';
import css from './App.css';





function App() {
    return (
        <BrowserRouter>
            <div className="App">
            

                {/* <SongForm /> */}
                <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/song/:id"  element={<OneSong />} />
                <Route path="/update/:id/" element={<Update />} />
              
              
                </Routes>
            
            
          
        
        
             </div>
            </BrowserRouter>


          
              

  );
}

export default App;

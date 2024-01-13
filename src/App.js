import React, { useEffect } from "react";
import { HomePage } from "./Pages/HomePage";
import { useDispatch } from "react-redux";
import { getSongs } from "./redux/action";
import { Header } from "./components/Header";
import { SongList } from "./Pages/SongList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Song } from "./Pages/Song";
import './App.css';
import { AddNewSong } from "./Pages/AddNewSong";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  return (
    <div  class="center">
    
      <BrowserRouter>
        <Header />  
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="SongsList" element={<SongList />} />
          <Route path="Song" element={<Song />} />
          <Route path="AddNewSong" element={<AddNewSong />} />
        </Routes>

      </BrowserRouter>
      
      <div style={{position: "fixed", left: "0", right: "0", bottom: "5px", textAlign: "center", marginBottom: "0"}}>**All the information on this website is published in good faith and for information purpose only.**</div>
    </div>
  );
}

export default App;

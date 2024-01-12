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
    </div>
  );
}

export default App;

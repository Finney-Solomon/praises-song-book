import React, { useEffect, useState } from "react";
import { HomePage } from "./Pages/HomePage";
import { useDispatch } from "react-redux";
import { getSongs } from "./redux/action";
import { Header } from "./components/Header";
import { SongList } from "./Pages/SongList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Song } from "./Pages/Song";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongs);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="SongsList" element={<SongList />}/>
      <Route path="Song" element={<Song />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

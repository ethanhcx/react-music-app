import Nav from "./Nav"
import { useState } from 'react';
import ArchivePage  from "./pages/ArchivePage"
import HomePage from "./pages/HomePage";
import AlbumPage from "./pages/AlbumPage"
import './App.css';
import { Routes, Route } from "react-router-dom"
import { albums as initalAlbums }  from "./data/albums";



function App() {
  const [albums, setAlbums] = useState(initalAlbums);

  function toggleLike(albumId) {
    setAlbums((currentAlbums) =>
      currentAlbums.map((album) =>
        album.id === albumId
          ? { ...album, liked: !album.liked }
          : album
      )
    );
  }

  return (
    <main className="app-shell">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage albums={albums} onToggleLike={toggleLike} />}/>
        <Route path="/archive" element={<ArchivePage albums={albums} onToggleLike={toggleLike}/>} />
        <Route path="/archive/album" element={<AlbumPage album={albums} onToggleLike={toggleLike}/>} />
      </Routes>
      <footer className="footer">
        <span>SIDE A — ARTIST ARCHIVE</span>
        <span>Built one component at a time.</span>
      </footer>
    </main>
  );
}

export default App;

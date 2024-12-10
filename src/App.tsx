import './App.css'
import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthorIntro from './pages/AuthorIntro';
import MangaChapter from './pages/MangaChapter';
import CharacterIntro from './pages/CharacterIntro';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Navigate to="/manga-chapter" />} />
        <Route path="/manga-chapter" element={<MangaChapter />} />
        <Route path="/character-intro" element={<CharacterIntro />} />
        <Route path="/author-intro" element={<AuthorIntro />} />
      </Routes>
    </Router>
  );
}

export default App;

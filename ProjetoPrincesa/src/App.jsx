import React from "react";
import { useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Discografia from "./pages/Discografia";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '300px' }}>
        <Link to="/">Home</Link>
        <Link to="/discografia">Discografia</Link>
        <Link to="/quiz">Quiz</Link>
      </nav>
      <hr/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/discografia" element={<Discografia/>} />
        <Route path="/quiz" element={<Quiz/>} />
      </Routes>
    </div>
  );
}

export default App;
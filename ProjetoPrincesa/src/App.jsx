import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Discografia from "./pages/Discografia";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "60px",
          padding: "20px",
          background: "#222",
          boxShadow: "0 0 15px rgba(0,0,0,0.5)",
          borderBottom: "2px solid #ffcc00",
        }}
      >
        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
            transition: "0.3s",
          }}
        >
          Home
        </Link>

        <Link
          to="/discografia"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
            transition: "0.3s",
          }}
        >
          Discografia
        </Link>

        <Link
          to="/quiz"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
            transition: "0.3s",
          }}
        >
          Quiz
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discografia" element={<Discografia />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
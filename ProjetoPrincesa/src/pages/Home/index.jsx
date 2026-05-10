import { useState } from "react";
import videoSrc from '../video/video.mp4';
import './index.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Teste seu conhecimento sobre Charlie Brown Jr e descubra seus principais albuns!
      </h1>

      <video className="home-video" controls src={videoSrc}></video>

      <p className="home-text">
        Responda as perguntas e veja o quanto você conhece a história da banda.
      </p>
    </div>
  );
}

export default Home;
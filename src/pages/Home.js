// src/pages/Home.js
import React from "react";
import NavBar from '../components/NavBar';
import MovieIcon from '../components/MovieIcon';
import TitleComponent from "../components/TitleComponent";
import MovieButtons from '../components/MovieButtons';
import Carousel from "../components/Carousel";
import NumberedCarousel from "../components/NumberedCarousel";
import AudioControl from "../components/AudioControl";
import "./Home.css";
import machos from '../img/movie-img/machos.jpg';
import solteiros from '../img/movie-img/solteiros.jpg';
import round from '../img/movie-img/round.jpg';
import guerra from '../img/movie-img/guerra.jpg';
import breaking from '../img/movie-img/breaking.jpg';
import dark from '../img/movie-img/dark.jpg';
import narco from '../img/movie-img/narcos.jpg';
import peaky from '../img/movie-img/peaky.jpg';
import stranger from '../img/movie-img/stranger.jpg';
import better from '../img/movie-img/better.jpg';
import house from '../img/movie-img/house.jpg';
import mind from '../img/movie-img/mind.jpg';
import the from '../img/movie-img/the.jpg';
import theCrow from '../img/movie-img/the crow.jpg';
import black from '../img/movie-img/black.jpg';
import you from '../img/movie-img/you.jpg';
// fuerhnfuf
// test
const movies1 = [
  { image: machos },
  { image: solteiros },
  { image: round },
  { image: guerra },

  { image: house },
  { image: mind },
  { image: house },
  { image: mind },
];

const movies2 = [
  { image: breaking },
  { image: stranger },
  { image: dark },
  { image: narco },

  { image: house },
  { image: mind },
  { image: house },
  { image: mind },
];

const movies3 = [
  { image: peaky },
  { image: better },
  { image: house },
  { image: mind },

  { image: house },
  { image: mind },
  { image: house },
  { image: mind },
];

const movies4 = [
  { image: the },
  { image: theCrow },
  { image: black },
  { image: you },

  { image: house },

];

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <MovieIcon />
      <TitleComponent />
      <MovieButtons />
      <AudioControl />

      <div className="carousel-section">
        <Carousel title="Séries Estrangeiras Dubladas" items={movies1} />
        <Carousel title="Top Séries de Drama" items={movies2} />
        <Carousel title="Melhores Séries de Suspense" items={movies3} />
        <NumberedCarousel title="Ranking das Melhores Séries" items={movies4} />
      </div>
    </div>
  );
};

export default Home;

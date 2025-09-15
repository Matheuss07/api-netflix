// src/pages/Home.js
import React from "react";
import NavBar from '../Components/NavBar';
import filmeService from "../Services/FilmesService";
import MovieIcon from '../Components/MovieIcon';
import TitleComponent from "../Components/TitleComponent";
import MovieButtons from '../Components/MovieButtons';
import Carousel from "../Components/Carousel";
import NumberedCarousel from "../Components/NumberedCarousel";
import AudioControl from "../Components/AudioControl";
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
  const filmeTopo = filmeService.getRandomFilme();
  return (
    <div className="home">
      <NavBar />
      <MovieIcon />
              <div className="tela" style={{ backgroundImage: `${filmeTopo.fotoThumbnail}` }}></div>
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

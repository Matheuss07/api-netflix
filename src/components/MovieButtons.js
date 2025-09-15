import '../Styles/MovieButtons.css'
import React from 'react';
import { MdInfoOutline } from "react-icons/md";
import { MdOutlinePlayArrow } from "react-icons/md";
import { Link } from 'react-router-dom';

function MovieButtons() {
  return (

   <div className="movie-buttons">
      <button className="watch-button">
        <span className="play-icon"><MdOutlinePlayArrow /></span> Assistir
      </button>
      <Link to="/Teste" className="tela-teste">
      <button className="info-button">
        <span className="info-icon"><MdInfoOutline /></span> 
        <span className="info-text">Mais Informações</span>
      </button>
    </Link>
      
    </div>
  );
}

export default MovieButtons;
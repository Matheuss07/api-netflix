import React from "react";
import "./FilmePage.css";
import NavBar from "../components/NavBar";
import FilmeHeader from "../components/FilmeHeader";
import FilmeDetalhe from "../components/FilmeDetalhes";

const Filme = () => {
  return (
    <div className="filme-page">
      <NavBar />

      <section className="filme-conteudo">
        <div className="bloco-imagem">
          {/* FOTO/ARTE DE FUNDO */}
          <FilmeHeader />
        </div>

        <div className="bloco-detalhes">
          {/* TÍTULO, TAGS, SINOPSE, BOTÕES */}
          <FilmeDetalhe />
        </div>
      </section>
    </div>
  );
};

export default Filme;
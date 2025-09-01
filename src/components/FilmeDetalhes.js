import "./FilmeDetalhes.css";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

function FilmeDetalhe() {
  return (
    <div className="filme-detalhes">
      <h1 className="filme-titulo">PRISON BREAK</h1>

      <div className="filme-tags">
        <span className="tag">2005</span>
        <span className="tag idade">12</span>
        <span className="tag">5 temporadas</span>
      </div>

      <p className="filme-sinopse">
        Conta a história de Michael Scofield, um engenheiro brilhante que elabora um plano ousado
        para tirar seu irmão Lincoln Burrows da prisão, condenado injustamente à pena de morte.
        Para isso, ele se deixa prender intencionalmente e usa sua inteligência, coragem e uma
        complexa tatuagem cheia de códigos para tentar realizar a fuga.
      </p>

      <p className="filme-info">
        <strong>Gênero:</strong> Drama, Ação, Suspense
      </p>
      <p className="filme-info">
        <strong>Idioma:</strong> Inglês
      </p>

      <div className="filme-botoes">
        <button className="btn assistir">
          <FaPlay className="icon" /> Assistir
        </button>
        <button className="btn lista">
          <AiOutlinePlus className="icon" /> Minha Lista
        </button>
      </div>
    </div>
  );
}

export default FilmeDetalhe;
import "./FilmeDestaque.css";
import { CiCircleInfo } from "react-icons/ci";
import { SiNetflix } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

// Componente para renderizar a classificação de idade
const Classificacao = ({ idade }) => {
  return <span className="classificacao">{idade}</span>;
};

function FilmeDestaque({ filme }) {
  return (
    <div
      className="filme-destaque"
      style={{ backgroundImage: `url(${filme.fotoCapa})` }}
    >
      <div className="overlay">
        <div className="conteudo">
          <div className="logoNet">
            <SiNetflix className="logo" />
            <span className="nomeFilm">F I L M E</span>
          </div>

          <h1 className="titulo">{filme.titulo}</h1>
          <h3 className="genero">{filme.genero}</h3>

          <div className="botoes">
            <button className="assistir">
              <FaPlay /> Assistir
            </button>
            <Link to="/filme" className="mais-infos">
              <CiCircleInfo /> Mais informações
            </Link>
            <Classificacao idade={filme.faixa_etaria} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmeDestaque;

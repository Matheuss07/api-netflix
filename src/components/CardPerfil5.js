import '../styles/CardPerfil1.css';
import { Link } from 'react-router-dom';
import icon5 from '../img/addbg.png';

function CardPerfil5() {
  return (
    <Link to="/home" className="card-perfil">
      <img 
        className="foto" 
        src={icon5} 
        alt="Adicionar perfil" 
      />
      <span className="nome">Adicionar perfil</span>
    </Link>
  );
}

export default CardPerfil5;

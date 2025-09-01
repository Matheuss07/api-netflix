import '../styles/CardPerfil1.css';
import { Link } from 'react-router-dom';
import icon2 from '../img/icon2.jpg';

function CardPerfil2() {
  return (
    <Link to="/home" className="card-perfil">
      <img 
        className="foto" 
        src={icon2} 
        alt="José" 
      />
      <span className="nome">José</span>
    </Link>
  );
}

export default CardPerfil2;

import '../styles/CardPerfil1.css';
import { Link } from 'react-router-dom';
import icon4 from '../img/icon4.png';

function CardPerfil4() {
  return (
    <Link to="/home" className="card-perfil">
      <img 
        className="foto" 
        src={icon4} 
        alt="Maria" 
      />
      <span className="nome">Maria</span>
    </Link>
  );
}

export default CardPerfil4;

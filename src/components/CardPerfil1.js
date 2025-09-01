import '../styles/CardPerfil1.css';
import { Link } from 'react-router-dom';
import icon1 from '../img/icon1.png';

function CardPerfil1() {
  return (
    <Link to="/home" className="card-perfil">
      <img 
        className="foto" 
        src={icon1} 
        alt="Alexsander" 
      />
      <span className="nome">Alexsander</span>
    </Link>
  );
}

export default CardPerfil1;
import '../styles/CardPerfil1.css';
import { Link } from 'react-router-dom';
import icon3 from '../img/icon3.png';

function CardPerfil3() {
  return (
    <Link to="/home" className="card-perfil">
      <img 
        className="foto" 
        src={icon3} 
        alt="João" 
      />
      <span className="nome">João</span>
    </Link>
  );
}

export default CardPerfil3;

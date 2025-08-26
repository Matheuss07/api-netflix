import "./FilmeHeader.css";
import { FaStar } from "react-icons/fa";
import tittlePrison from "../img/nomePrison.png";

function FilmeHeader() {
  return (
    <div className="card-filme-header">
         <div className="Header">
           <span className="TituloHeader">
              <img className="tittlePrison" src={tittlePrison} alt="Título" />
           </span>
          
         </div>
          <div className="AvaliacaoHeader">

       
              
          </div>
    </div>  
  );
}

export default FilmeHeader;

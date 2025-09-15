import CardFilme from "./CardFilme";
import "./Carrosel.css";

function Carrossel ({listadeFilmes, descricao}) {
    return(     
        <div className="minhaLista">

            <span>{descricao}</span>
            
            <div className="carrosel">
                {
                    listadeFilmes.map((filme, idx) => 
                        <CardFilme key={idx} filme={filme} />
                    )
                }
            </div>     
        </div>
    );
}

export default Carrossel;
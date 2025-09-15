import "../Styles/SelecaoPerfil.css";
import BotaoVazado from "../Components/BotaoVazado";
import CardPerfil from "../Components/CardPerfil"

function SelecaoPerfil ({listaDeUsuarios}) {

    return(
        
        
        <div className="selecao-perfil">
            <h2>
                Quem está assistindo? 
            </h2>

            <div className="janelas">

            {
                listaDeUsuarios.map(user => 
                    <CardPerfil key={user.id} usuario={user} />
                )
            }

            </div>

            <BotaoVazado />

        </div>

    );
}

export default SelecaoPerfil;
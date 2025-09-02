import '../styles/SelecaoPerfil.css'
import BotaoVazado from '../components/BotaoVazado'
import CardPerfil from '../components/CardPerfil'




function SelecaoPerfil( {listaDeUsuarios}){

    // const listaDeCards = listaDeUsuarios.map(user => <CardPerfil usuario={user}/>);

    return (
        <div className='selecao-perfil'>
            <h2 className='titulo'>Quem está assistindo?</h2>
            <div className='container-cards'>
              {listaDeCards}
            </div>
            <BotaoVazado />
        </div>
    );
}   

export default SelecaoPerfil;
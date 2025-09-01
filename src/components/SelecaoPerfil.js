import '../styles/SelecaoPerfil.css'
import BotaoVazado from '../components/BotaoVazado'
import CardPerfil from '../components/CardPerfil'
import CardPerfil1 from './CardPerfil1';
import CardPerfil2 from './CardPerfil2';
import CardPerfil3 from './CardPerfil3';
import CardPerfil4 from './CardPerfil4';
import CardPerfil5 from './CardPerfil5';




function SelecaoPerfil( {listaDeUsuarios}){

    const listaDeCards = listaDeUsuarios.map(user => <CardPerfil usuario={user}/>);

    return (
        <div className='selecao-perfil'>
            <h2 className='titulo'>Quem está assistindo?</h2>
            <div className='container-cards'>
              <CardPerfil1 />
              <CardPerfil2 />
              <CardPerfil3 />
              <CardPerfil4 />
              <CardPerfil5 />
            </div>
            <BotaoVazado />
        </div>
    );
}   

export default SelecaoPerfil;
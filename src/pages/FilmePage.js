import './FilmePage.css'
import FilmeHeader from '../components/FilmeHeader'
import NavBar from '../components/NavBar'
import FilmeDetalhe from '../components/FilmeDetalhes'

function Filme(){
    return(
        <div className="filme-page">
            <NavBar />
            <div className='filme-conteudo'>
            <FilmeHeader />
             <FilmeDetalhe />
             </div>
        </div>
    );
}



export default Filme;
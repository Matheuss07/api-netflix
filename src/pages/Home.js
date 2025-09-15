import "./Home.css";

import NaveBar from "../Components/NavBar";
import filmeService from "../Services/FilmesService";
import Carrossel from "../Components/Carrosel";
import FilmeDestaque from "../Components/FilmeDestaque";

function HomePage() {
    const filmeTopo = filmeService.getRandomFilme();

    const series = filmeService.getSeries();
    const filmes = filmeService.getFilmes();

    return (
        <div className="tela" style={{ backgroundImage: `url(${filmeTopo.fotoThumbnail})` }}>
            <div className="overlay"></div> {/* camada de gradiente escuro */}

            <div className="casa">
                <NaveBar />
                <FilmeDestaque filme={filmeTopo} />
            </div>

            {/* Seção dos carrosséis */}
            <div className="todosFilme">
                <Carrossel listadeFilmes={filmes} descricao="Filmes novos" />
                <Carrossel listadeFilmes={series} descricao="Novidades nas séries" />
            </div>
        </div>
    );
}

export default HomePage;
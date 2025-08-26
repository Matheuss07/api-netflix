import "./FilmeDetalhes.css";

function FilmeDetalhe() {
  return (
    <div className="filme-detalhes">
      <h2 className="filme-titulo">Prison Break: Em Busca da Verdade</h2>
      <ul className="filme-info">
        <li><strong>Ano:</strong> 2005</li>
        <li><strong>Temporadas:</strong> 5</li>
        <li><strong>Gênero:</strong> Drama, Ação, Suspense</li>
        <li><strong>Classificação:</strong> 12 anos</li>
        <li><strong>Idioma:</strong> Inglês</li>
      </ul>
      <p className="filme-sinopse">
        Michael Scofield elabora um plano audacioso para salvar seu irmão injustamente condenado à morte, enfrentando desafios e perigos dentro da prisão. Uma série cheia de ação, mistério e reviravoltas!
      </p>
    </div>
  );
}

export default FilmeDetalhe;
import React, { useEffect } from "react";
import { getPopularMovies, getMovieDetails } from "./services/movieService";

function App() {
  useEffect(() => {
    async function fetchData() {
      try {
        const populares = await getPopularMovies();
        console.log("🎬 Filmes Populares:", populares);

        if (populares.length > 0) {
          const detalhes = await getMovieDetails(populares[0].id);
          console.log("ℹ️ Detalhes do primeiro filme:", detalhes);
        }
      } catch (error) {
        console.error("❌ Erro ao buscar filmes:", error);
      }
    }
    fetchData();
  }, []);

  return <h1>API Netflix conectada ✅ (confira o console)</h1>;
}

export default App;

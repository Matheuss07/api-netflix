// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "f7d34a1e26b7443d49ac04583652ea16",
    // api_key: "SUA_API_KEY_AQUI", // substitua pela sua chave do TMDb
    language: "pt-BR"
  }
});

export default api;

import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/movie";
const MOVIES_API_KEY = "6251e629c61bceaf56a3d45f05637256";
// https://api.themoviedb.org/3/movie/top_rated?api_key=6251e629c61bceaf56a3d45f05637256

const moviesApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: MOVIES_API_KEY,
  },
});

export const getTopMovies = async () => {
  console.log("Get movie");
  const data = await moviesApi.get("top_rated");
  console.log("data:", data);
  return data;
};

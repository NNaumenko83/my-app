import axios from "axios";

const API_KEY = "65b7e1cdc460446cbb438b4053289b4f";
const BASE_URL = "https://newsapi.org/v2";

const newsApi = axios.create({
  baseURL: BASE_URL,
});

export const fetchAllNews = async () => {
  const country = "ua";
  const res = await newsApi.get(
    `top-headlines?apiKey=${API_KEY}&country=${country}`
  );
  return res.data.articles;
};

export const fetchNewsByQuery = async (query) => {
  const res = await newsApi.get(`everything?apiKey=${API_KEY}&q=${query}`);
  return res.data.articles;
};

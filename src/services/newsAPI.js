import axios from "axios";

const API_KEY = "65b7e1cdc460446cbb438b4053289b4f";
const BASE_URL = "https://newsapi.org/v2";

const newsApi = axios.create({
  baseURL: BASE_URL,
});

const config = { params: { apiKey: API_KEY, country: "ua" } };

export const fetchAllNews = async () => {
  const res = await newsApi.get("top-headlines", config);
  console.log("res:", res);
  return res.data.articles;
};

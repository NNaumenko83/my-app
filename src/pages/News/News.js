import React from "react";
import { useEffect, useState } from "react";
import { useInput } from "../../Hooks/useInput";

import { fetchAllNews } from "../../services/newsAPI";
import { NewsList } from "../../components/NewsList/NewsList";
import { Container } from "./News.styled";

const handleButtonClick = () => {};

export const News = () => {
  const [allNews, setAllNews] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setValue, ...input } = useInput();

  useEffect(() => {
    setIsLoading(true);
    const getAllNews = async () => {
      try {
        const res = await fetchAllNews();
        setAllNews(res);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getAllNews();
  }, []);

  return (
    <Container>
      <h2>News</h2>
      <input name="query" {...input} />
      <button onClick={handleButtonClick}>Search</button>
      {allNews.length > 0 && <NewsList newsList={allNews} />}
    </Container>
  );
};

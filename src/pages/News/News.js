import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";

import { Puff } from "react-loader-spinner";

import { useInput } from "../../Hooks/useInput";

import { fetchAllNews, fetchNewsByQuery } from "../../services/newsAPI";

import { NewsList } from "../../components/NewsList/NewsList";
import { Container } from "./News.styled";
import { NewsSceleton } from "../../components/NewsSceleton/NewsSceleton";

const handleButtonClick = () => {};

export const News = () => {
  const [allNews, setAllNews] = useState([]);
  const [queryNews, setQueryNews] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setValue, ...input } = useInput();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("searchParams:", searchParams);

  const newsName = searchParams.get("name") ?? "";
  console.log("newsName:", newsName);

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

  useEffect(() => {
    if (!newsName) {
      return;
    }
    setIsLoading(true);
    const getNews = async (qury) => {
      try {
        const res = await fetchNewsByQuery(qury);
        setQueryNews(res);
        setAllNews([]);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    getNews(newsName);
  }, [newsName]);

  const updataQueryString = (e) => {
    console.log("name:", e.target.value);
    const nextParams = e.target.value !== "" ? { name: e.target.value } : {};
    console.log("nextParams:", nextParams);
    setSearchParams(nextParams);
  };

  return (
    <Container>
      <h2>News</h2>
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        value={newsName}
        onChange={updataQueryString}
      />
      <button onClick={handleButtonClick}>Search</button>

      {allNews.length > 0 && <NewsList newsList={allNews} />}
      {queryNews.length > 0 && <NewsList newsList={queryNews} />}
      {isLoading && <NewsSceleton />}
    </Container>
  );
};

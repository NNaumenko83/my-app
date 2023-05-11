import React from "react";

import { useSearchParams } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";
import { useQuery } from "@tanstack/react-query";

import { fetchAllNews, fetchNewsByQuery } from "../../services/newsAPI";

import { NewsList } from "../../components/NewsList/NewsList";
import { Container } from "./News.styled";
import { NewsSceleton } from "../../components/NewsSceleton/NewsSceleton";

export const News = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("searchParams:", searchParams);

  const newsName = searchParams.get("name") ?? "";
  console.log("newsName:", newsName);

  // use React Query
  const allNews = useQuery({
    queryKey: ["news"],
    queryFn: fetchAllNews,
  });
  console.log("allNews.data:", allNews.data);

  const queryNews = useQuery({
    queryKey: ["news", newsName],
    queryFn: () => {
      if (!newsName) {
        console.log("Тут нічого");
        return null;
      }
      return fetchNewsByQuery(newsName);
    },
  });

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
      {/* <button onClick={handleButtonClick}>Search</button> */}

      {queryNews.data?.length > 0 ? (
        <NewsList newsList={queryNews.data} />
      ) : (
        allNews.data?.length > 0 && <NewsList newsList={allNews.data} />
      )}
      {allNews.isLoading && <NewsSceleton />}
    </Container>
  );
};

import React from "react";
import { NewsItem } from "../NewsItem/NewsItem";
import { List } from "./NewsList.styled";

export const NewsList = ({ newsList }) => {
  console.log("newsList:", newsList);

  return (
    <>
      <h3>NewsList</h3>
      <List>
        {newsList.map((item, index) => (
          <NewsItem
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.urlToImage}
            itemUrl={item.url}
          />
        ))}
      </List>
    </>
  );
};

// title

// description

// url

// urlToImage

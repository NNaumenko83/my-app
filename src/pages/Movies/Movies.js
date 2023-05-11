import React from "react";

import { useQuery } from "@tanstack/react-query";

import { getTopMovies } from "../../services/moviesAPI";

export const Movies = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["movies"],
    queryFn: getTopMovies,
  });

  //   console.log("data:", data.data.results);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <ul>
        {data.data.results.map((movie) => (
          <li key={movie.id}>{movie.original_title}</li>
        ))}
      </ul>
    </>
  );
};

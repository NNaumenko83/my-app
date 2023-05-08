import React, { useEffect, useState } from "react";

import { getTopMovies } from "../../services/moviesAPI";

export const Movies = () => {
  useEffect(() => {
    (async () => {
      const movies = await getTopMovies();
      console.log("movies:", movies);
    })();
  }, []);

  return <h1> Movies Page</h1>;
};

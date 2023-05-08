import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import { NewsCard } from "./NewsSceleton.styled";
import { List } from "./NewsSceleton.styled";

export const NewsSceleton = () => {
  return (
    <List>
      {Array.from(new Array(6)).map(() => {
        return (
          <NewsCard>
            <Stack spacing={1}>
              <Skeleton animation="wave" />
              <Skeleton
                variant="rectangular"
                width={350}
                height={200}
                animation="wave"
              />
              <Skeleton
                variant="rectangular"
                width={350}
                height={50}
                animation="wave"
              />
              <Skeleton animation="wave" />
            </Stack>
          </NewsCard>
        );
      })}
    </List>
  );
};

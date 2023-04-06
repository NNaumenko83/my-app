import React from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "..";
import { Header, Container } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <h1>MY APP</h1>
          <AppBar />
        </Container>
      </Header>

      <Outlet />
    </>
  );
};

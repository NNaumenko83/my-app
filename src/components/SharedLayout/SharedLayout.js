import React from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "..";
import { Header, Container } from "./SharedLayout.styled";
import { Toggle } from "../ToggleButton/ToggleButton";

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <h1>MY APP</h1>
          <Toggle />
          <AppBar />
        </Container>
      </Header>

      <Outlet />
    </>
  );
};

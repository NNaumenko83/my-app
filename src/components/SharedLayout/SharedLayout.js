import React from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "..";
import { Header, Container, Footer } from "./SharedLayout.styled";
import { Toggle } from "../ToggleButton/ToggleButton";

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <h1 style={{ width: "150px" }}>MY APP</h1>
          <Toggle />
          <AppBar />
        </Container>
      </Header>
      {/* <aside
        style={{
          border: "1px solid red",
          width: "20%",
          paddingLeft: "0.5rem",
          marginLeft: "0.5rem",
          float: "right",
          boxShadow: "inset 5px 0 5px -5px #29627e",
          fontStyle: "italic",
          color: " #29627e",
        }}
      >
        <h6>Бокова панель</h6>
      </aside> */}

      <Outlet />

      <Footer>
        <Container>
          <h1>Footer</h1>
        </Container>
      </Footer>
    </>
  );
};

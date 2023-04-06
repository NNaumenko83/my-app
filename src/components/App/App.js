import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

import { SharedLayout } from "..";
import { SignIn, LogIn, Home } from "../../pages";

import { GlobalStyles } from "../globalStyles";
import { lightTheme, darkTheme } from "../Themes";
import { Toggle } from "../ToggleButton/ToggleButton";

export function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Toggle toggleTheme={themeToggler} theme={theme}>
        Switch Theme
      </Toggle>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="login" element={<LogIn />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

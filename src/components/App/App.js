import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { useSelector } from "react-redux";

import { SharedLayout } from "..";
import { SignIn, LogIn, Home } from "../../pages";
import { selectTheme } from "../../redux/themeSlice";

import { GlobalStyles } from "../globalStyles";
import { lightTheme, darkTheme } from "../Themes";

export function App() {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
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

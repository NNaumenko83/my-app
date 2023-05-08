import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { useSelector } from "react-redux";

import { SharedLayout } from "..";
import { SignIn, LogIn, Home, News, Movies } from "../../pages";
import { selectTheme } from "../../redux/themeSlice";

import { GlobalStyles } from "../globalStyles";
import { lightTheme, darkTheme } from "../Themes";

export function App() {
  const theme = useSelector(selectTheme);

  return (
    // <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="login" element={<LogIn />} />
          <Route path="news" element={<News />} />
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

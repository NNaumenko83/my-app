import React from "react";
import { func, string } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ToggleButton.styled";
import { ReactComponent as MoonIcon } from "../../icons/moon_icon.svg";
import { ReactComponent as SunIcon } from "../../icons/sun_icon.svg";
import { selectTheme, toggleTheme } from "../../redux/themeSlice";

export const Toggle = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const themeToggler = () => {
    theme === "light"
      ? dispatch(toggleTheme("dark"))
      : dispatch(toggleTheme("light"));
  };

  return (
    <Button onClick={themeToggler} themeTest={theme}>
      <SunIcon />
      <MoonIcon />
    </Button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

import React from "react";
import { func, string } from "prop-types";
import { Button } from "./ToggleButton.styled";
import { useTheme } from "styled-components";
import { ReactComponent as MoonIcon } from "../../icons/moon_icon.svg";
import { ReactComponent as SunIcon } from "../../icons/sun_icon.svg";

export const Toggle = ({ theme, toggleTheme }) => {
  console.log("theme:", theme);
  return (
    <Button onClick={toggleTheme} themeTest={theme}>
      <SunIcon />
      <MoonIcon />
    </Button>
  );
};

Toggle.propTypes = {
  //   theme: string.isRequired,
  toggleTheme: func.isRequired,
};

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/authSlice";
import { selectAuthUser } from "../../redux/authSlice";

import { AuthNav } from "./AppBar.styled";
import { CustomLink } from "../Link/CustomLink";

export const AppBar = () => {
  const dispatch = useDispatch();
  const { name, isLoggedIn } = useSelector(selectAuthUser);

  const handleLogOutButton = () => {
    dispatch(logOut());
  };
  return (
    <>
      {!isLoggedIn ? (
        <AuthNav>
          <CustomLink to="/signin">Sign in</CustomLink>{" "}
          <CustomLink to="/login">Log in</CustomLink>
        </AuthNav>
      ) : (
        <>
          <CustomLink to="/news">News</CustomLink>
          <CustomLink to="/movies">Movies</CustomLink>
          <p>Hello, {name}</p>
          <button type="button" onClick={handleLogOutButton}>
            Log out
          </button>
        </>
      )}
    </>
  );
};

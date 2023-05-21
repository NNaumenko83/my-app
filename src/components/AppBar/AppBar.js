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
          <CustomLink to="/signin" style={{ color: "black" }}>
            Sign in
          </CustomLink>
          <CustomLink to="/login">Log in</CustomLink>
        </AuthNav>
      ) : (
        <div
          style={{
            display: "flex",
            width: "100%",
            outline: "1px solid blue",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "30px",
              margin: "0 auto",
              outline: "1px solid red",
            }}
          >
            <CustomLink to="/news">News</CustomLink>
            <CustomLink to="/movies">Movies</CustomLink>
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",

              outline: "1px solid red",
            }}
          >
            <p>Hello, {name}</p>
            <button type="button" onClick={handleLogOutButton}>
              Log out
            </button>
          </div>
        </div>
      )}
    </>
  );
};

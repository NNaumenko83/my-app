import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/authSlice";
import { selectAuthUser } from "../../redux/authSlice";

import { AuthNav } from "./AppBar.styled";

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
          <Link to="/signin">Sign in</Link> <Link to="/login">Log in</Link>
        </AuthNav>
      ) : (
        <>
          <p>Hello, {name}</p>
          <button type="button" onClick={handleLogOutButton}>
            Log out
          </button>
        </>
      )}
    </>
  );
};

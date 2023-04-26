import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Input style
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/joy/Checkbox";
import Done from "@mui/icons-material/Done";
import Button from "@mui/joy/Button";
import "animate.css";

import { Form } from "./SignInForm.styled";

import { useInput } from "../../Hooks/useInput";
import { logIn } from "../../redux/authSlice";

export const SignInForm = () => {
  const { setValue: setNameValue, ...name } = useInput();

  const { setValue: setEmailValue, ...email } = useInput();
  const { setValue: setPasswordValue, ...password } = useInput();
  const { setValue: setConfirmPasswordValue, ...confirmPassword } = useInput();
  const [check, setCheck] = useState(false);

  const dispatch = useDispatch();

  const handleCheckBoxChange = () => {
    setCheck(!check);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      elements: { name, email, password, confіrmPassword },
    } = e.target;
    if (password.value !== confіrmPassword.value) {
      return alert("Паролі не співпадають");
    }

    dispatch(logIn(name.value));
    setNameValue("");
    setEmailValue("");
    setPasswordValue("");
    setConfirmPasswordValue("");
    setCheck(false);
  };

  return (
    <Form onSubmit={handleSubmit} className="animate__animated animate__fadeIn">
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        autoComplete="off"
        {...name}
      />
      <TextField
        id="outlined-basic"
        label="E-mail"
        variant="outlined"
        type="email"
        name="email"
        autoComplete="off"
        {...email}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        autoComplete="off"
        {...password}
      />

      <TextField
        id="outlined-basic"
        label=" Confirm password"
        variant="outlined"
        type="password"
        name="confіrmPassword"
        autoComplete="off"
        {...confirmPassword}
      />

      <Checkbox
        uncheckedIcon={<Done />}
        label="I agree to the terms and conditions"
        onChange={handleCheckBoxChange}
        checked={check}
        slotProps={{
          root: ({ checked, focusVisible }) => ({
            sx:
              !checked || !check
                ? {
                    "& svg": { opacity: focusVisible ? 0.32 : 0 },
                    "&:hover svg": {
                      opacity: 0.32,
                    },
                  }
                : undefined,
          }),
        }}
      />

      <Button
        type="submit"
        name="asset"
        disabled={!check}
        sx={{ width: "200px", margin: "0 auto" }}
      >
        Sign In
      </Button>
    </Form>
  );
};

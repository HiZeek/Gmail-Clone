import React from "react";
import "../styles/Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "./firebase";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login-container">
        <img
          src="https://www.pngall.com/wp-content/uploads/12/Gmail-By-Google-PNG-Pic.png"
          alt="Gmail"
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;

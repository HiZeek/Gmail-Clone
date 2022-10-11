import React from "react";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";

// FIREBASE
import { auth, provider } from "./firebase";

// STYLE
import "../styles/Login.css";

// MATERIAL UI
import { Button } from "@mui/material";

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

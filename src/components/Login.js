import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";

function Login() {
  const [hasAccount, sethasAccount] = useState(false);

  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");

  const [EmailOrPassword, setEmailOrPassword] = useState("");

  const clearInputs = () => {
    setuserEmail("");
    setuserPassword("");
  };
  const clearErrors = () => {
    setEmailOrPassword("");
  };

  const register = async () => {
    clearInputs();
    clearErrors();

    try {
      await createUserWithEmailAndPassword(auth, userEmail, userPassword);
    } catch (err) {
      setEmailOrPassword(err.message);
    }
  };
  const login = async () => {
    clearInputs();
    clearErrors();

    try {
      await signInWithEmailAndPassword(auth, userEmail, userPassword);
    } catch (err) {
      setEmailOrPassword(err.message);
    }
  };

  return (
    <section className="login">
      <div className="loginContainer">
        <label>Email</label>
        <input
          type="text"
          autoFocus
          onChange={(e) => setuserEmail(e.target.value)}
        />
        <p className="errorMsg">{EmailOrPassword}</p>

        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setuserPassword(e.target.value)}
        />

        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={login}>Sign in</button>
              <p>
                Don't have an account ?{" "}
                <span onClick={() => sethasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={register}>Sign up</button>
              <p>
                Have an account ?{" "}
                <span onClick={() => sethasAccount(!hasAccount)}>Sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Login;

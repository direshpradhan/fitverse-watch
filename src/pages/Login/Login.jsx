import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "./Login.module.css";

export const Login = () => {
  const { loginUserWithCredentials } = useAuth();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const loginHandler = (event) => {
    event.preventDefault();
    loginUserWithCredentials(email, password);
  };

  return (
    <div className={`flex flex-col justify-center ${styles.main}`}>
      <h2 className={`${styles.title}`}>Login</h2>
      <form onSubmit={(event) => loginHandler(event)}>
        <input
          className={`${styles.input}`}
          type="email"
          id="email"
          placeholder="E-mail"
          onChange={(event) => setEmail(() => event.target.value)}
        />

        <input
          className={`${styles.input}`}
          type="password"
          id="password"
          placeholder="Password"
          onChange={(event) => setPassword(() => event.target.value)}
        />
        <button
          type="submit"
          // onClick={() => loginUserWithCredentials(email, password)}
          className={`${styles.button} pointer`}
        >
          Login
        </button>
      </form>
      <p className={`text-centre`}>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

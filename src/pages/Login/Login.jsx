import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "./Login.module.css";

export const Login = () => {
  const { loginUserWithCredentials } = useAuth();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <div className={`flex flex-col justify-center ${styles.main}`}>
      <h2 className={`${styles.title}`}>Login</h2>
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
        onClick={() => {
          console.log("click");
          loginUserWithCredentials(email, password);
        }}
        className={`${styles.button} `}
      >
        Login
      </button>
      <p className={`text-centre`}>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

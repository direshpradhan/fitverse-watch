import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "./Signup.module.css";

export const Signup = () => {
  const { signupUser } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = (event) => {
    event.preventDefault();
    signupUser(name, email, password);
  };

  return (
    <div className={`flex flex-col justify-center ${styles.main}`}>
      <h2 className={`${styles.title}`}>Sign up</h2>
      <form onSubmit={(event) => signupHandler(event)}>
        <input
          onChange={(event) => setName(() => event.target.value)}
          className={`${styles.input}`}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(event) => setEmail(() => event.target.value)}
          className={`${styles.input}`}
          type="text"
          placeholder="E-mail"
        />
        <input
          onChange={(event) => setPassword(() => event.target.value)}
          className={`${styles.input}`}
          type="password"
          placeholder="Password"
        />
        <button
          type="submit"
          //   onClick={() => signupUser(name, email, password)}
          className={`${styles.button} pointer`}
        >
          Sign up
        </button>
      </form>
      <p className="text-centre">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

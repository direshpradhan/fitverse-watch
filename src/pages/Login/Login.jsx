import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import styles from "./Login.module.css";

export const Login = () => {
  const { loginUserWithCredentials, token } = useAuth();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const loginHandler = (event) => {
    event.preventDefault();
    loginUserWithCredentials(email, password);
  };

  useEffect(() => {
    token && navigate("/");
  }, [token, navigate]);

  return (
    <div className={`flex flex-col justify-center ${styles.main}`}>
      <h2 className={`${styles.title}`}>Login to Fitverse Watch</h2>
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
        <p
          // type="submit"
          onClick={() => loginUserWithCredentials("test@test.com", "test@123")}
          className={`text-centre pointer ${styles.guest}`}
        >
          Login as Guest
        </p>
      </form>
      <p className={`text-centre`}>
        Don't have an account?{" "}
        <a href="/signup" className={`${styles.signup}`}>
          Sign up!
        </a>
      </p>
    </div>
  );
};

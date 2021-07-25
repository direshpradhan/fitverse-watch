import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./Nav.module.css";

export const Nav = () => {
  const navigate = useNavigate();
  const { token, logoutUser } = useAuth();
  return (
    <nav className={`${styles.nav} `}>
      <Link className={`${styles.link}`} to="/">
        <div>Fitverse</div>
      </Link>
      {/* {!login ? (
        <Link style={{ color: "white" }} to="/login">
          <button className="btn">Login</button>
        </Link>
      ) : ( */}
      {token ? (
        <button className="btn btn-primary" onClick={() => logoutUser()}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={() => navigate("/login")}>
          Login
        </button>
      )}
      {/* )} */}
    </nav>
  );
};

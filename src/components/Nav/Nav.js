import React from "react";
// import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export const Nav = () => {
  //   const navigate = useNavigate();
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
      <button className="btn">Login</button>
      {/* )} */}
    </nav>
  );
};

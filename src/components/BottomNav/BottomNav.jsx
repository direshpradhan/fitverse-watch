import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./BottomNav.module.css";

export const BottomNav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={`${styles.options_menu}`}>
        <NavLink
          to="/"
          end
          className={`${styles.navlink}`}
          activeClassName={`${styles.active}`}
        >
          <div
            className={`pointer flex flex-col items-center`}
            onClick={() => navigate("/")}
          >
            <span class="material-icons-outlined">home</span>
            Home
          </div>
        </NavLink>
        <NavLink
          to="/library"
          className={`${styles.navlink}`}
          activeClassName={`${styles.active}`}
        >
          <div
            className={`pointer flex flex-col items-center`}
            onClick={() => navigate("/library")}
          >
            <span class="material-icons-outlined">video_library</span>
            Library
          </div>
        </NavLink>
      </div>
    </div>
  );
};

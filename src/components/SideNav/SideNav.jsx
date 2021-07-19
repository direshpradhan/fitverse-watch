import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideNav.module.css";

export const SideNav = () => {
  return (
    <div>
      <div className={`${styles.main}`}>
        <ul>
          <NavLink
            end
            to="/"
            activeClassName={styles.active}
            className={`${styles.navlink}`}
          >
            <li
              // onClick={() => navigate("/")}
              className={`${styles.sidebar_item} flex`}
            >
              <span class="material-icons-outlined">home</span> Home
            </li>
          </NavLink>
          <NavLink
            to="/playlist"
            activeClassName={styles.active}
            className={`${styles.navlink}`}
          >
            <li
              // onClick={() => navigate("/playlist")}
              className={`${styles.sidebar_item} flex`}
            >
              <span class="material-icons">playlist_play</span> Playlist
            </li>
          </NavLink>
          <NavLink
            to="/watch-later"
            activeClassName={styles.active}
            className={`${styles.navlink}`}
          >
            <li
              // onClick={() => navigate("/watch-later")}
              className={`${styles.sidebar_item} flex`}
            >
              <span class="material-icons-outlined">watch_later</span> Watch
              Later
            </li>
          </NavLink>
          <NavLink
            to="/history"
            activeClassName={styles.active}
            className={`${styles.navlink}`}
          >
            <li
              // onClick={() => navigate("/history")}
              className={`${styles.sidebar_item} flex`}
            >
              <span class="material-icons-outlined">history</span> History
            </li>
          </NavLink>
          <NavLink
            to="/liked-videos"
            activeClassName={styles.active}
            className={`${styles.navlink}`}
          >
            <li
              // onClick={() => navigate("/liked-videos")}
              className={`${styles.sidebar_item} flex`}
            >
              <span class="material-icons-outlined">thumb_up</span> Liked
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

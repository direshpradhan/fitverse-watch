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
      <div>
        <ul className="flex flex-center list-non-bullet">
          <Link className={`${styles.link}`} to="/playlist">
            <li className="list-item-inline">Playlist</li>
          </Link>
          <Link className={`${styles.link}`} to="/watch-later">
            <li className="list-item-inline">Watch Later</li>
          </Link>
          <Link className={`${styles.link}`} to="/history">
            <li className="list-item-inline">History</li>
          </Link>
          <Link className={`${styles.link}`} to="/liked-videos">
            <li className="list-item-inline">Liked</li>
          </Link>

          {/* <li className="list-item-inline"> */}
          {/* {!login ? (
              <Link style={{ color: "white" }} to="/login">
                <button className="btn">Login</button>
              </Link>
            ) : ( */}
          {/* <button className="btn">Login</button> */}
          {/* )} */}
          {/* </li> */}
        </ul>
      </div>
    </nav>
  );
};

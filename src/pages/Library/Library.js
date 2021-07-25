import React from "react";
import { useNavigate } from "react-router";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import styles from "./Library.module.css";

export const Library = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        <li
          className={`${styles.listitem} flex pointer`}
          onClick={() => navigate("/history")}
        >
          <span class="material-icons-outlined">history</span> History
        </li>
        <li
          className={`${styles.listitem} flex pointer`}
          onClick={() => navigate("/playlist")}
        >
          <span class="material-icons">playlist_play</span> Playlist
        </li>
        <li
          className={`${styles.listitem} flex pointer`}
          onClick={() => navigate("/watch-later")}
        >
          <span class="material-icons-outlined">watch_later</span> Watch Later
        </li>
        <li
          className={`${styles.listitem} flex pointer`}
          onClick={() => navigate("/liked-videos")}
        >
          <span class="material-icons-outlined">thumb_up</span> Liked Videos
        </li>
      </ul>
      <BottomNav />
    </div>
  );
};

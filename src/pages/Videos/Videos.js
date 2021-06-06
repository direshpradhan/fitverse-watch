import React from "react";
import { videos } from "../../videosDB";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import styles from "./Videos.module.css";
import { useNavigate } from "react-router";

export const Videos = () => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.main}`}>
      <div className="flex">
        <div className={`${styles.sidebar}`}>
          <ul>
            <li
              onClick={() => navigate("/")}
              className={`${styles.sidebar_item} flex`}
            >
              <span class="material-icons-outlined">home</span> Home
            </li>
            <li
              onClick={() => navigate("/playlist")}
              className={`${styles.sidebar_item} flex`}
            >
              <span class="material-icons-outlined">playlist_add</span> Playlist
            </li>
            <li
              onClick={() => navigate("/watch-later")}
              className={`${styles.sidebar_item} flex`}
            >
              <span class="material-icons-outlined">watch_later</span> Watch
              Later
            </li>
            <li
              onClick={() => navigate("/history")}
              className={`${styles.sidebar_item} flex`}
            >
              <span class="material-icons-outlined">history</span> History
            </li>
            <li
              onClick={() => navigate("/liked-videos")}
              className={`${styles.sidebar_item} flex`}
            >
              <span class="material-icons-outlined">thumb_up</span> Liked
            </li>
          </ul>
        </div>
        <div className={`${styles.videos_container} flex`}>
          {videos.map((video) => {
            return (
              <div className={`${styles.card_container}`}>
                <VideoCard videoId={video.id} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${styles.options_menu}`}>
        <div className={`${styles.pointer}`} onClick={() => navigate("/")}>
          Home
        </div>
        <div
          className={`${styles.pointer}`}
          onClick={() => navigate("/library")}
        >
          Library
        </div>
      </div>
    </div>
  );
};

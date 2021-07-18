import React, { useState } from "react";
import { useData } from "../../../../context/DataContext";
import styles from "./PlaylistDetailsVideoCard.module.css";

export const PlaylistDetailsVideoCard = ({ videoId, playlistId }) => {
  const { videos, dispatch } = useData();
  const video = videos.find((video) => video._id === videoId);
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  return (
    <div
      className={`flex ${styles.card}`}
      onClick={() => showOptionsModal && setShowOptionsModal((state) => false)}
    >
      <img src={video?.image} alt="Cover pic" className={`${styles.img}`} />

      <div className={`${styles.video_details}`}>
        <div className={`${styles.title}`}>{video?.title}</div>
        <div className={`${styles.channel_name}`}>{video?.channelName}</div>
        <div>
          <span>{video?.statistics.viewCount} views</span>
          <span>{video?.publishedOn}</span>
        </div>
      </div>

      <span
        className={`material-icons-outlined pointer ${styles.more_options_icon}`}
        onClick={() => setShowOptionsModal((state) => !state)}
      >
        more_vert
      </span>

      {showOptionsModal && (
        <div className={`${styles.more_options} pointer`}>
          <div
            onClick={() => {
              dispatch({
                type: "ADD_TO_PLAYLIST",
                payload: { playlistId, videoId },
              });
              setShowOptionsModal((state) => false);
            }}
          >
            Remove from Playlist
          </div>
          <div
            className="pointer"
            onClick={() => setShowOptionsModal((state) => false)}
          >
            Cancel
          </div>
        </div>
      )}
    </div>
  );
};

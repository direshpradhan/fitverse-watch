import React from "react";
import { useData } from "../../context/DataContext";
import styles from "./MoreOptions.module.css";

export const MoreOptions = ({ id }) => {
  const { state } = useData();
  const isInWatchLater = state.watchLater.find((video) => video.id === id);
  const isInLikedVideos = state.liked.find((video) => video.id === id);
  return (
    <div className={`${styles.container}`}>
      <div>
        {isInWatchLater ? "Remove From Watch Later" : "Add to Watch Later"}
      </div>
      <div>
        {isInLikedVideos ? "Remove From Liked Videos" : "Add to Liked Videos"}
      </div>
      <div>Cancel</div>
    </div>
  );
};

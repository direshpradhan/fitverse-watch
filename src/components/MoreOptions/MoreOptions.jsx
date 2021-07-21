import React from "react";
import { useData } from "../../context/DataContext";
import styles from "./MoreOptions.module.css";

export const MoreOptions = ({ id }) => {
  const { watchLater, likedVideos } = useData();
  const isInWatchLater = watchLater.find((video) => video._id === id);
  const isInLikedVideos = likedVideos.find((video) => video._id === id);
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

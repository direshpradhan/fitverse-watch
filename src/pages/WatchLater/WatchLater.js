import React from "react";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useData } from "../../context/DataContext";
import styles from "./WatchLater.module.css";

export const WatchLater = () => {
  const { watchLater } = useData();

  return (
    <div className={`${styles.main}`}>
      <h1>Watch Later</h1>
      {watchLater.map((video) => {
        return (
          <div className={`${styles.card_container}`}>
            <VideoCard videoId={video._id} />
          </div>
        );
      })}
    </div>
  );
};

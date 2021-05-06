import React from "react";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useData } from "../../context/DataContext";
import styles from "./History.module.css";

export const History = () => {
  const { state } = useData();
  return (
    <div className={`${styles.main}`}>
      <h1>History</h1>
      {state.history.map((video) => {
        return (
          <div className={`${styles.card_container}`}>
            <VideoCard videoId={video.id} />
          </div>
        );
      })}
    </div>
  );
};

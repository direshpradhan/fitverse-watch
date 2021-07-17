import React from "react";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useData } from "../../context/DataContext";
import styles from "./History.module.css";

export const History = () => {
  const { history } = useData();
  return (
    <div className={`${styles.main}`}>
      <h1>History</h1>
      {history.map((video) => {
        return (
          <div className={`${styles.card_container}`}>
            <VideoCard videoId={video._id} />
          </div>
        );
      })}
    </div>
  );
};

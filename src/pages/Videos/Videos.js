import React from "react";
import { videos } from "../../videosDB";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import styles from "./Videos.module.css";

export const Videos = () => {
  return (
    <div className={`${styles.main}`}>
      {/* <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          cursor: "pointer",
        }}
      > */}
      {videos.map((video) => {
        return (
          <div className={`${styles.card_container}`}>
            <VideoCard videoId={video.id} />
          </div>
        );
      })}
    </div>
    // </div>
  );
};

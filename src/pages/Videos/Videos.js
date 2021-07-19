import React from "react";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import styles from "./Videos.module.css";
import { useData } from "../../context/DataContext";
import { SideNav } from "../../components/SideNav/SideNav";
import { BottomNav } from "../../components/BottomNav/BottomNav";

export const Videos = () => {
  const { videos } = useData();
  return (
    <div className={`${styles.main}`}>
      <div className="flex">
        <SideNav />
        <div className={`${styles.videos_container} flex`}>
          {videos.map((video) => {
            return (
              <div className={`${styles.card_container}`}>
                <VideoCard videoId={video._id} />
              </div>
            );
          })}
        </div>
        <BottomNav />
      </div>
    </div>
  );
};

import React from "react";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useData } from "../../context/DataContext";
import { SideNav } from "../../components/SideNav/SideNav";
import styles from "./LikedVideos.module.css";
import { LikedVideoCard } from "./components/LikedVideoCard";
import { BottomNav } from "../../components/BottomNav/BottomNav";

export const LikedVideos = () => {
  const { liked } = useData();

  return (
    <div>
      <SideNav />
      <div className={`${styles.main}`}>
        <h2>Liked Videos</h2>
        {liked.map((video) => {
          return (
            <div className={`${styles.card_container}`}>
              <LikedVideoCard videoId={video._id} />
            </div>
          );
        })}
      </div>
      <BottomNav />
    </div>
  );
};

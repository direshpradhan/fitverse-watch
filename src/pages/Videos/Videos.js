import React from "react";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import styles from "./Videos.module.css";
import { useData } from "../../context/DataContext";
import { SideNav } from "../../components/SideNav/SideNav";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { Loader } from "../../components/Loader/Loader";

export const Videos = () => {
  const { videos } = useData();
  return (
    <div className={`${styles.main}`}>
      <div className="flex">
        <SideNav />
        {videos.length !== 0 ? (
          <div className={`${styles.videos_container} flex`}>
            {videos.map((video) => {
              return (
                <div className={`${styles.card_container}`}>
                  <VideoCard videoId={video._id} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className={`${styles.loader_container}`}>
            <Loader />
          </div>
        )}
        <BottomNav />
      </div>
    </div>
  );
};

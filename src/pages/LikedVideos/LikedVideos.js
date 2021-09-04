import React from "react";
import { useData } from "../../context/DataContext";
import { SideNav } from "../../components/SideNav/SideNav";
import styles from "./LikedVideos.module.css";
import { LikedVideoCard } from "./components/LikedVideoCard";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { Loader } from "../../components/Loader/Loader";

export const LikedVideos = () => {
  const { likedVideos } = useData();
  console.log(likedVideos);

  return (
    <div>
      <SideNav />
      <div className={`${styles.main}`}>
        {likedVideos?.length === 0 ? (
          <>
            <div className={`${styles.text}`}>No liked videos</div>
          </>
        ) : likedVideos === null ? (
          <Loader />
        ) : (
          <>
            <h2>Liked Videos</h2>
            {likedVideos?.map((videoId) => {
              return (
                <div className={`${styles.card_container}`}>
                  <LikedVideoCard videoId={videoId} />
                </div>
              );
            })}
          </>
        )}
      </div>
      <BottomNav />
    </div>
  );
};

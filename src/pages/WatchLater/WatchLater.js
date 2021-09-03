import React from "react";
import { useData } from "../../context/DataContext";
import { SideNav } from "../../components/SideNav/SideNav";
import styles from "./WatchLater.module.css";
import { WatchLaterVideoCard } from "./components/WatchLaterVideoCard";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { Loader } from "../../components/Loader/Loader";

export const WatchLater = () => {
  const { watchLater } = useData();

  return (
    <div>
      <SideNav />
      <div className={`${styles.main}`}>
        {watchLater.length !== 0 ? (
          <>
            <h2>Watch Later</h2>
            {watchLater.map((videoId) => {
              console.log(videoId);
              return (
                <div className={`${styles.card_container}`}>
                  <WatchLaterVideoCard videoId={videoId} />
                </div>
              );
            })}
          </>
        ) : (
          <Loader />
        )}
      </div>
      <BottomNav />
    </div>
  );
};

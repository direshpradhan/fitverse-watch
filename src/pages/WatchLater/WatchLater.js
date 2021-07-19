import React from "react";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useData } from "../../context/DataContext";
import { SideNav } from "../../components/SideNav/SideNav";
import styles from "./WatchLater.module.css";
import { WatchLaterVideoCard } from "./components/WatchLaterVideoCard";

export const WatchLater = () => {
  const { watchLater } = useData();

  return (
    <div>
      <SideNav />
      <div className={`${styles.main}`}>
        <h2>Watch Later</h2>
        {watchLater.map((video) => {
          return (
            <div className={`${styles.card_container}`}>
              <WatchLaterVideoCard videoId={video._id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

import React from "react";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useData } from "../../context/DataContext";
import { SideNav } from "../../components/SideNav/SideNav";
import styles from "./History.module.css";
import { HistoryCard } from "./components/HistoryCard";

export const History = () => {
  const { history } = useData();
  return (
    <div>
      <SideNav />
      <div className={`${styles.main}`}>
        <h2>History</h2>
        {history.map((video) => {
          return (
            <div className={`${styles.card_container}`}>
              <HistoryCard videoId={video._id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

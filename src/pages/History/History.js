import React from "react";
import { useData } from "../../context/DataContext";
import { SideNav } from "../../components/SideNav/SideNav";
import styles from "./History.module.css";
import { HistoryCard } from "./components/HistoryCard";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { Loader } from "../../components/Loader/Loader";

export const History = () => {
  const { history } = useData();
  return (
    <div>
      <SideNav />
      <div className={`${styles.main}`}>
        {history?.length === 0 ? (
          <div className={`${styles.text}`}>No videos in History</div>
        ) : history === null ? (
          <Loader />
        ) : (
          <>
            <h2>History</h2>
            {history?.map((videoId) => {
              return (
                <div className={`${styles.card_container}`}>
                  <HistoryCard videoId={videoId} />
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

import React from "react";
import { useData } from "../../context/DataContext";
import { SideNav } from "../../components/SideNav/SideNav";
import styles from "./History.module.css";
import { HistoryCard } from "./components/HistoryCard";
import { BottomNav } from "../../components/BottomNav/BottomNav";

export const History = () => {
  const { history } = useData();
  return (
    <div>
      <SideNav />
      <div className={`${styles.main}`}>
        <h2>History</h2>
        {history.map((videoId) => {
          return (
            <div className={`${styles.card_container}`}>
              <HistoryCard videoId={videoId} />
            </div>
          );
        })}
      </div>
      <BottomNav />
    </div>
  );
};

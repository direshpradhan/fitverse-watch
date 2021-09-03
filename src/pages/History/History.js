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
        {history.length !== 0 ? (
          <>
            <h2>History</h2>
            {history.map((videoId) => {
              return (
                <div className={`${styles.card_container}`}>
                  <HistoryCard videoId={videoId} />
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

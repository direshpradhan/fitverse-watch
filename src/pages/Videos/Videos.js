import React from "react";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import styles from "./Videos.module.css";
import { useNavigate } from "react-router";
import { useData } from "../../context/DataContext";
import { SideNav } from "../../components/SideNav/SideNav";

export const Videos = () => {
  const { videos } = useData();
  const navigate = useNavigate();
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
      </div>
      <div className={`${styles.options_menu}`}>
        <div className={`${styles.pointer}`} onClick={() => navigate("/")}>
          Home
        </div>
        <div
          className={`${styles.pointer}`}
          onClick={() => navigate("/library")}
        >
          Library
        </div>
      </div>
    </div>
  );
};

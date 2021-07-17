import React from "react";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useData } from "../../context/DataContext";
import styles from "./LikedVideos.module.css";

export const LikedVideos = () => {
  const { liked } = useData();

  return (
    <div className={`${styles.main}`}>
      <h1>Liked Videos</h1>
      {liked.map((video) => {
        return (
          <div className={`${styles.card_container}`}>
            <VideoCard videoId={video._id} />
          </div>

          //   <div
          //     style={{
          //       display: "flex",
          //       flexDirection: "column",
          //       margin: "1rem 0",
          //       width: "30%",
          //     }}
          //   >
          //     <img width="95%" src={video.image} alt="Thumbnail" />
          //     <div
          //       style={{
          //         alignText: "center",
          //         width: "90%",
          //         margin: "0 auto",
          //         flexGrow: 1,
          //       }}
          //     >
          //       {video.title}
          //     </div>
          //   </div>
        );
      })}
    </div>
  );
};

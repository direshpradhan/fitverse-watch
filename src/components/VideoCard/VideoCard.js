import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { videos } from "../../videosDB";
import styles from "./VideoCard.module.css";

export const VideoCard = ({ videoId }) => {
  const { dispatch } = useData();
  const video = videos.find((video) => video.id === videoId);
  const { id, title, image } = video;

  return (
    <Link className={`${styles.link}`} to={`/video/${id}`}>
      <div onClick={() => dispatch({ type: "ADD_TO_HISTORY", payload: video })}>
        <img width="100%" src={image} alt="Thumbnail" />
        <div className={`${styles.title}`}>{title}</div>
      </div>
    </Link>
  );
};

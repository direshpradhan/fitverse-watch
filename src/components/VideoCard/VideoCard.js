import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { addToHistory } from "../../services";
import { MoreOptions } from "../MoreOptions/MoreOptions";
import styles from "./VideoCard.module.css";

export const VideoCard = ({ videoId }) => {
  const { dispatch, videos } = useData();
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const video = videos.find((video) => video._id === videoId);
  const {
    _id: id,
    title,
    image,
    channelImage,
    channelName,
    publishedOn,
    statistics: { viewCount },
  } = video;
  const navigate = useNavigate();

  return (
    // <Link className={`${styles.link}`} to={`/video/${id}`}>
    <>
      <div
        className={`${styles.main}`}
        onClick={() => addToHistory(video._id, dispatch)}
      >
        <img
          className={`${styles.image}`}
          width="100%"
          src={image}
          alt="Thumbnail"
        />

        <div className={`${styles.video_details} flex`}>
          <img
            className={`${styles.img_channel} img-circular`}
            src={channelImage}
            alt=""
          />
          <div>
            <div
              onClick={() => navigate(`/video/${id}`)}
              className={`${styles.title} pointer`}
            >
              {title}
            </div>
            <div className={`${styles.name}`}>{channelName}</div>
            <span className={`${styles.name}`}>{viewCount} views</span>
            <span className={`${styles.name}`}>{publishedOn}</span>
          </div>
        </div>
        <span
          onClick={() => setShowOptionsModal((option) => !option)}
          className={`${styles.more_options_icon} material-icons-outlined`}
        >
          more_vert
        </span>
        <div className={`${styles.more_options}`}>
          {showOptionsModal && <MoreOptions id={id} />}
        </div>
      </div>
    </>
    // </Link>
  );
};

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoreOptions } from "../../../../components/MoreOptions/MoreOptions";
import { useData } from "../../../../context/DataContext";
import { videos } from "../../../../videosDB";
import styles from "./PlaylistCard.module.css";

export const PlaylistCard = ({ videoId }) => {
  const { dispatch } = useData();
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const video = videos.find((video) => video.id === videoId);
  const { id, title, image, channelImage, channelName } = video;
  const navigate = useNavigate();

  return (
    // <Link className={`${styles.link}`} to={`/video/${id}`}>
    <>
      <div
        style={{ position: "relative" }}
        onClick={() => dispatch({ type: "ADD_TO_HISTORY", payload: video })}
      >
        <img width="100%" src={image} alt="Thumbnail" />

        <div className={`${styles.video_details} flex`}>
          <img
            className={`${styles.img_channel} img-circular`}
            src={channelImage}
            alt=""
          />
          <div>
            <div
              onClick={() => navigate(`/video/${id}`)}
              className={`${styles.title}`}
            >
              {title}
            </div>
            <div className={`${styles.name}`}>{channelName}</div>
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

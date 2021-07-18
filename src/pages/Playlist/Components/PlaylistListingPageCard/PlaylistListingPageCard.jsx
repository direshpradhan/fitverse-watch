import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoreOptions } from "../../../../components/MoreOptions/MoreOptions";
import { useData } from "../../../../context/DataContext";
import styles from "./PlaylistListingPageCard.module.css";

export const PlaylistCard = ({ videoId }) => {
  const { videos, dispatch } = useData();
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const video = videos.find((video) => video._id === videoId);
  console.log(video);
  // const { id, title, image, channelImage, channelName } = video;
  const navigate = useNavigate();

  return (
    // <Link className={`${styles.link}`} to={`/video/${id}`}>
    <>
      <div
        style={{ position: "relative" }}
        onClick={() => dispatch({ type: "ADD_TO_HISTORY", payload: video })}
      >
        <img width="100%" src={video?.image} alt="Thumbnail" />

        <div className={`${styles.video_details} flex`}>
          <img
            className={`${styles.img_channel} img-circular`}
            src={video?.channelImage}
            alt=""
          />
          <div>
            <div
              onClick={() => navigate(`/video/${video?._id}`)}
              className={`${styles.title}`}
            >
              {video?.title}
            </div>
            <div className={`${styles.name}`}>{video?.channelName}</div>
          </div>
        </div>
        <span
          onClick={() => setShowOptionsModal((option) => !option)}
          className={`${styles.more_options_icon} material-icons-outlined`}
        >
          more_vert
        </span>
        <div className={`${styles.more_options}`}>
          {showOptionsModal && <MoreOptions id={video?._id} />}
        </div>
      </div>
    </>
    // </Link>
  );
};

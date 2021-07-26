import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext";
import {
  addToHistory,
  addToLikedVideos,
  addToWatchLater,
  removeFromLikedVideos,
  removeFromWatchLater,
} from "../../services";
import styles from "./VideoCard.module.css";

export const VideoCard = ({ videoId }) => {
  const { dispatch, videos, watchLater, likedVideos } = useData();
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
  const isInWatchLater = watchLater.find((videoID) => videoID === id);
  const isInLikedVideos = likedVideos.find((videoID) => videoID === id);
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`${styles.main}`}
        onClick={() => {
          addToHistory(video._id, dispatch);
          showOptionsModal && setShowOptionsModal(() => false);
        }}
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
          className={`${styles.more_options_icon} material-icons-outlined pointer`}
        >
          more_vert
        </span>
        <div className={`${styles.more_options}`}>
          {showOptionsModal && (
            <div className={`${styles.container}`}>
              {isInWatchLater ? (
                <div
                  className="pointer"
                  onClick={() => removeFromWatchLater(id, dispatch)}
                >
                  Remove From Watch Later
                </div>
              ) : (
                <div
                  className="pointer"
                  onClick={() => addToWatchLater(id, dispatch)}
                >
                  Add to Watch Later
                </div>
              )}
              {isInLikedVideos ? (
                <div
                  onClick={() => removeFromLikedVideos(id, dispatch)}
                  className="pointer"
                >
                  Remove From Liked Videos
                </div>
              ) : (
                <div
                  onClick={() => addToLikedVideos(id, dispatch)}
                  className="pointer"
                >
                  Add to Liked Videos
                </div>
              )}
              <div
                className={`pointer`}
                onClick={() => setShowOptionsModal(() => false)}
              >
                Cancel
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

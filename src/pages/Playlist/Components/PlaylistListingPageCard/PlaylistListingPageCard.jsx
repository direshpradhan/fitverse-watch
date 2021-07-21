import { useNavigate } from "react-router-dom";
import { useData } from "../../../../context/DataContext";
import { addToHistory } from "../../../../services";
import styles from "./PlaylistListingPageCard.module.css";

export const PlaylistCard = ({ videoId }) => {
  const { videos, dispatch } = useData();
  const video = videos.find((video) => video._id === videoId);
  console.log(video);
  // const { id, title, image, channelImage, channelName } = video;
  const navigate = useNavigate();

  return (
    // <Link className={`${styles.link}`} to={`/video/${id}`}>
    <>
      <div
        style={{ position: "relative" }}
        onClick={() => addToHistory(videoId, dispatch)}
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
              className={`${styles.title} pointer`}
            >
              {video?.title}
            </div>
            <div className={`${styles.name}`}>{video?.channelName}</div>
          </div>
        </div>
      </div>
    </>
    // </Link>
  );
};

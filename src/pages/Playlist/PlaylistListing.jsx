import { useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { PlaylistCard } from "./Components/PlaylistListingPageCard/PlaylistListingPageCard";
import styles from "./PlaylistListing.module.css";
import { SideNav } from "../../components/SideNav/SideNav";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { Loader } from "../../components/Loader/Loader";

export const PlaylistListing = () => {
  const { playlist } = useData();
  const navigate = useNavigate();

  return (
    <div className="flex">
      <SideNav />
      <div className={`${styles.main}`}>
        {playlist.length !== 0 ? (
          <>
            <h2>Playlist</h2>
            {playlist?.map((playlistItem) => {
              const { _id: id, name, videos } = playlistItem;
              return (
                <div className={`${styles.playlist_container}`}>
                  <div className={`flex justify-between`}>
                    <div>
                      <p className={`${styles.playlist_name}`}>{name}</p>
                      <span className={`${styles.video_length}`}>
                        {videos.length} videos
                      </span>
                    </div>
                    <span
                      onClick={() => navigate(`/playlist/${id}`)}
                      className={`material-icons-outlined pointer`}
                    >
                      open_in_new
                    </span>
                  </div>
                  <div className={`flex ${styles.playlist_video_container}`}>
                    {videos.map((videoId) => {
                      console.log(videoId);
                      return (
                        <div className={`${styles.card_container}`}>
                          <PlaylistCard videoId={videoId} />
                        </div>
                      );
                    })}
                  </div>
                  <div className="divider"></div>
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

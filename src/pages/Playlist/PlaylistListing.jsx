import { useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { PlaylistCard } from "./Components/PlaylistListingPageCard/PlaylistListingPageCard";
import styles from "./PlaylistListing.module.css";
import { SideNav } from "../../components/SideNav/SideNav";
import { BottomNav } from "../../components/BottomNav/BottomNav";

export const PlaylistListing = () => {
  const { playlist } = useData();
  const navigate = useNavigate();

  return (
    <div className="flex">
      <SideNav />
      <div className={`${styles.main}`}>
        <h2>Playlist</h2>
        {playlist?.map((playlistItem) => {
          console.log(playlistItem);
          const { _id: id, name, videos } = playlistItem;
          return (
            <div>
              <div className={`flex justify-between`}>
                <input
                  className={`${styles.playlist_name}`}
                  type="text"
                  readOnly
                  value={name}
                />
                <span
                  onClick={() => navigate(`/playlist/${id}`)}
                  className={`material-icons-outlined pointer`}
                >
                  open_in_new
                </span>
              </div>

              <div className="flex" style={{ overflowX: "auto" }}>
                {videos.map((videoId) => {
                  console.log(videoId);
                  return (
                    <div className={`${styles.card_container}`}>
                      <PlaylistCard videoId={videoId} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <BottomNav />
    </div>
  );
};

import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoreOptions } from "../../components/MoreOptions/MoreOptions";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useData } from "../../context/DataContext";
import { PlaylistCard } from "./Components/PlaylistListingPageCard/PlaylistListingPageCard";
import styles from "./PlaylistListing.module.css";

export const PlaylistListing = () => {
  const { playlist, dispatch } = useData();

  const [showOptionsModal, setShowOptionsModal] = useState(false);
  // const [editInput, setEditInput] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const playlistInput = useRef(null);
  const navigate = useNavigate();

  // const playlist = state.playlist.find((playlistItem)=>playlistItem.id)
  // const changePlaylistName = () => {
  //   if (!editInput) {
  //     console.log("inside focus");
  //     playlistInput.current.focus();
  //   }
  //   setEditInput((val) => !val);
  // };

  return (
    <div className={styles.main}>
      <h1>Playlist</h1>
      {playlist.map((playlistItem) => {
        const { id, name, videos } = playlistItem;
        newPlaylistName === "" && setNewPlaylistName(name);
        console.log(newPlaylistName);
        return (
          <div>
            <div className={`flex justify-between`}>
              <input
                className={`${styles.playlist_name}`}
                type="text"
                readOnly
                ref={playlistInput}
                value={name}
                onChange={(e) => setNewPlaylistName(e.target.value)}
              />
              <span
                onClick={() => navigate(`/playlist/${id}`)}
                className={`material-icons-outlined pointer`}
              >
                open_in_new
              </span>
            </div>
            {/* <button onClick={changePlaylistName}>Change Name</button>
            <button
              onClick={() =>
                dispatch({
                  type: "RENAME_PLAYLIST",
                  payload: { id, name: newPlaylistName },
                })
              }
            >
              Save
            </button> */}
            {/* <button
              className="btn"
              onClick={() => dispatch({ type: "CLEAR_PLAYLIST", payload: id })}
            >
              Clear
            </button> */}

            <div className="flex" style={{ overflowX: "auto" }}>
              {videos.map((videoId) => {
                return (
                  <div className={`${styles.card_container}`}>
                    <PlaylistCard videoId={videoId} />
                    {/* <span
                      onClick={() => setShowOptionsModal((option) => !option)}
                      className={`${styles.more_options_icon} material-icons-outlined`}
                    >
                      more_vert
                    </span> */}
                    {/* <div className={`${styles.more_options}`}>
                      {showOptionsModal && <MoreOptions id={videoId} />}
                    </div> */}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

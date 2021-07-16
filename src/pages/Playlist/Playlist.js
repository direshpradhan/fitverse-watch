import React, { useRef, useState } from "react";
import { MoreOptions } from "../../components/MoreOptions/MoreOptions";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useData } from "../../context/DataContext";
import { PlaylistCard } from "./Components/PlaylistCard/PlaylistCard";
import styles from "./Playlist.module.css";

export const Playlist = () => {
  const { state, dispatch } = useData();

  const [showOptionsModal, setShowOptionsModal] = useState(false);
  // const [editInput, setEditInput] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const playlistInput = useRef(null);

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
      {state.playlist.map((playlistItem) => {
        const { id, name, videos } = playlistItem;
        newPlaylistName === "" && setNewPlaylistName(name);
        console.log(newPlaylistName);
        return (
          <div>
            <input
              className={`${styles.playlist_name}`}
              type="text"
              readOnly
              ref={playlistInput}
              value={name}
              onChange={(e) => setNewPlaylistName(e.target.value)}
            />
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
            <button
              className="btn"
              onClick={() => dispatch({ type: "CLEAR_PLAYLIST", payload: id })}
            >
              Clear
            </button>

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

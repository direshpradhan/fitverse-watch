import React, { useRef, useState } from "react";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useData } from "../../context/DataContext";
import styles from "./Playlist.module.css";

export const Playlist = () => {
  const { state, dispatch } = useData();

  const [editInput, setEditInput] = useState(false);
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
              readOnly={!editInput}
              ref={playlistInput}
              value={editInput ? newPlaylistName : name}
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

            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {videos.map((videoId) => {
                return (
                  <div className={`${styles.card_container} flex`}>
                    <VideoCard videoId={videoId} />
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

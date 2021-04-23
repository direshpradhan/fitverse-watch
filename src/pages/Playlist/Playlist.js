import React, { useState } from "react";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useData } from "../../context/DataContext";

export const Playlist = () => {
  const { state, dispatch } = useData();

  const [editInput, setEditInput] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  console.log(editInput);
  return (
    <div>
      <h1>This is Playlist</h1>
      {state.playlist.map((playlistItem) => {
        const { id, name, videos } = playlistItem;
        newPlaylistName === "" && setNewPlaylistName(name);
        return (
          <div>
            <input
              style={{ border: "none" }}
              type="text"
              readOnly={!editInput}
              value={newPlaylistName}
              onChange={(e) => setNewPlaylistName(e.target.value)}
            />
            <button onClick={() => setEditInput((val) => !val)}>
              Change Name
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "RENAME_PLAYLIST",
                  payload: { id, name: newPlaylistName },
                })
              }
            >
              Save
            </button>
            <button
              onClick={() => dispatch({ type: "CLEAR_PLAYLIST", payload: id })}
            >
              Clear
            </button>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                margin: "0 1rem",
                cursor: "pointer",
              }}
            >
              {videos.map((videoId) => {
                return (
                  <div
                    style={{ display: "flex", margin: "1rem", width: "22%" }}
                  >
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

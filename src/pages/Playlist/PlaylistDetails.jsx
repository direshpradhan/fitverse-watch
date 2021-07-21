import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { PlaylistDetailsVideoCard } from "./Components/PlaylistDetailsVideoCard/PlaylistDetailsVideoCard";
import { SideNav } from "../../components/SideNav/SideNav";
import styles from "./PlaylistDetails.module.css";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { deletePlaylist, updatePlaylistName } from "../../services";

export const PlaylistDetails = () => {
  const { playlistId } = useParams();
  const { playlist, dispatch } = useData();
  console.log(playlist);
  const currentPlaylist = playlist?.find(
    (playlist) => playlist._id === playlistId
  );
  console.log(currentPlaylist);
  const [editInput, setEditInput] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState(currentPlaylist?.name);
  const playlistInput = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setNewPlaylistName(currentPlaylist?.name);
  }, [currentPlaylist]);

  const changePlaylistName = () => {
    if (!editInput) {
      console.log(editInput);
      playlistInput.current.focus();
    }
    setEditInput(() => true);
  };

  return (
    <div>
      <SideNav />
      <div className={`${styles.main}`}>
        <div className={`flex justify-between ${styles.title}`}>
          <input
            className={`${styles.playlist_name}`}
            type="text"
            readOnly={!editInput}
            ref={playlistInput}
            value={newPlaylistName}
            onChange={(e) => setNewPlaylistName(e.target.value)}
          />
          <div className={`flex items-center`}>
            {!editInput ? (
              <span
                onClick={() => changePlaylistName()}
                class="material-icons-outlined pointer"
              >
                edit
              </span>
            ) : (
              <span
                onClick={() => {
                  setEditInput(() => false);
                  updatePlaylistName(playlistId, newPlaylistName, dispatch);
                }}
                class="material-icons-outlined pointer"
              >
                check
              </span>
            )}
            <span
              onClick={() => {
                deletePlaylist(playlistId, dispatch);
                navigate("/playlist");
              }}
              class="material-icons-outlined pointer"
            >
              delete
            </span>
          </div>
        </div>
        <div>
          {currentPlaylist?.videos.map((videoId) => {
            return (
              <div>
                <PlaylistDetailsVideoCard
                  videoId={videoId}
                  playlistId={playlistId}
                />
              </div>
            );
          })}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

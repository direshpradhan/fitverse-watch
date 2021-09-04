import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useData } from "../../context/DataContext";
import { SideNav } from "../../components/SideNav/SideNav";
import styles from "./VideoDetails.module.css";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import {
  addToHistory,
  addToLikedVideos,
  addToPlaylist,
  addToWatchLater,
  createPlaylist,
  removeFromLikedVideos,
  removeFromWatchLater,
  removeVideoFromPlaylist,
} from "../../services";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";

export const VideoDetails = () => {
  const { videoId } = useParams();
  const { token } = useAuth();
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const { state, dispatch, videos, likedVideos, watchLater } = useData();
  const video = videos.find((video) => video._id === videoId);
  const likedVideo = likedVideos?.find((videoID) => videoID === videoId);
  const watchLaterVideo = watchLater?.find((videoID) => videoID === videoId);
  const navigate = useNavigate();

  const newPlaylistHandler = (event) => {
    event.preventDefault();
    createPlaylist(videoId, playlistName, dispatch);
    setPlaylistName("");
  };

  useEffect(
    () => state.history && addToHistory(videoId, dispatch),
    [dispatch, videoId, state]
  );

  return (
    <div>
      <SideNav />
      {!video ? (
        <Loader />
      ) : (
        <div className={`${styles.main_container}`}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video?._id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="allowfullscreen"
            allowAutoplay="autoplay"
          ></iframe>
          <p className={`${styles.title}`}>{video?.title}</p>
          <div className={`flex ${styles.options}`}>
            {token && watchLaterVideo ? (
              <div
                className={`flex flex-col`}
                onClick={() => removeFromWatchLater(video?._id, dispatch)}
              >
                <span className={`${styles.pointer} material-icons`}>
                  watch_later
                </span>
                <div>Remove from Watch Later</div>
              </div>
            ) : (
              <div
                className={`flex flex-col`}
                onClick={() =>
                  token
                    ? addToWatchLater(video?._id, dispatch)
                    : navigate("/login")
                }
              >
                <span className={`${styles.pointer} material-icons-outlined`}>
                  watch_later
                </span>
                <div>Add to WatchLater</div>
              </div>
            )}{" "}
            {token && likedVideo ? (
              <div
                className={`flex flex-col`}
                onClick={() => removeFromLikedVideos(video?._id, dispatch)}
              >
                <span className={`${styles.pointer} material-icons`}>
                  thumb_up
                </span>
                <div>Unlike</div>
              </div>
            ) : (
              <div
                className={`flex flex-col`}
                onClick={() =>
                  token
                    ? addToLikedVideos(video?._id, dispatch)
                    : navigate("/login")
                }
              >
                <span className={`${styles.pointer} material-icons-outlined`}>
                  thumb_up
                </span>
                <div>Like</div>
              </div>
            )}
            <div
              className={`flex flex-col`}
              onClick={() =>
                token
                  ? setShowPlaylistModal((state) => !state)
                  : navigate("/login")
              }
            >
              <span className={`${styles.pointer} material-icons`}>
                playlist_add
              </span>
              <div>Add to Playlist</div>
            </div>
          </div>

          {showPlaylistModal && (
            <div
              onClick={() => setShowPlaylistModal((state) => !state)}
              className={`${styles.modal_container}`}
            >
              <div
                onClick={(event) => event.stopPropagation()}
                className={`${styles.modal}`}
              >
                <div className={`${styles.playlist_list}`}>
                  {state?.playlist?.map((playlistItem) => {
                    return (
                      <div className={`${styles.playlist_checkbox}`}>
                        <input
                          id="playlistName"
                          onChange={() =>
                            playlistItem.videos.find(
                              (playlistVideo) => playlistVideo === video?._id
                            )
                              ? removeVideoFromPlaylist(
                                  video?._id,
                                  playlistItem._id,
                                  dispatch
                                )
                              : addToPlaylist({
                                  videoId: video._id,
                                  playlistId: playlistItem._id,
                                  playlistName: playlistItem.name,
                                  dispatch,
                                })
                          }
                          type="checkbox"
                          checked={
                            playlistItem.videos.find(
                              (playlistVideo) => playlistVideo === video?._id
                            )
                              ? true
                              : false
                          }
                        />
                        <label
                          className={`${styles.label}`}
                          htmlFor="playlistName"
                        >
                          {playlistItem.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <form
                  className={`${styles.playlist_form}`}
                  onSubmit={(event) => newPlaylistHandler(event)}
                >
                  <input
                    className={`${styles.input}`}
                    onChange={(event) => setPlaylistName(event.target.value)}
                    type="text"
                    value={playlistName}
                  />{" "}
                  <button
                    type="submit"
                    className={`${styles.add_button} pointer`}
                  >
                    Add
                  </button>
                </form>
                <div className="divider"></div>
                <p
                  className={`${styles.close_button} pointer`}
                  onClick={() => setShowPlaylistModal(() => false)}
                >
                  Close
                </p>
              </div>
            </div>
          )}
        </div>
      )}
      <BottomNav />
    </div>
  );
};

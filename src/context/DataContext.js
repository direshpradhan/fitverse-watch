import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";
import axios from "axios";
import { useAuth } from "./AuthContext";
import { API_URL } from "../constants";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { token } = useAuth();

  useEffect(() => {
    (async function getVideos() {
      console.log("useEffect...");
      try {
        const videoResponse = await axios.get(`${API_URL}/videos`);
        console.log(videoResponse);
        if (videoResponse.status === 200) {
          dispatch({
            type: "INITIALIZE_VIDEOS",
            payload: videoResponse.data.videos,
          });
        }

        if (token) {
          const watchLaterResponse = await axios.get(`${API_URL}/watch-later`);
          watchLaterResponse.status === 200 &&
            dispatch({
              type: "INITIALIZE_WATCH_LATER",
              payload: watchLaterResponse.data.videos,
            });

          const likedVideosResponse = await axios.get(
            `${API_URL}/liked-videos`
          );
          likedVideosResponse.status === 200 &&
            dispatch({
              type: "INITIALIZE_LIKED_VIDEOS",
              payload: likedVideosResponse.data.videos,
            });

          const historyResponse = await axios.get(`${API_URL}/history`);
          historyResponse.status === 200 &&
            dispatch({
              type: "INITIALIZE_HISTORY",
              payload: historyResponse.data.videos,
            });

          const playlistResponse = await axios.get(`${API_URL}/playlist`);
          playlistResponse.status === 200 &&
            dispatch({
              type: "INITIALIZE_PLAYLISTS",
              payload: playlistResponse.data.playlist,
            });
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [token]);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        videos: state.videos,
        watchLater: state.watchLater,
        likedVideos: state.likedVideos,
        history: state.history,
        playlist: state.playlist,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

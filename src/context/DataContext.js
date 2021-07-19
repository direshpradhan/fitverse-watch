import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";
import axios from "axios";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async function getVideos() {
      console.log("useEffect...");
      try {
        const videoResponse = await axios.get("http://localhost:3000/videos");
        console.log(videoResponse);
        if (videoResponse.status === 200) {
          dispatch({
            type: "INITIALIZE_VIDEOS",
            payload: videoResponse.data.videos,
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        videos: state.videos,
        watchLater: state.watchLater,
        liked: state.liked,
        history: state.history,
        playlist: state.playlist,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

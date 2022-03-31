import axios from "axios";
import { API_URL } from "../../constants";

export const addToWatchLater = async (videoId, dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/watch-later`, {
      video: { id: videoId },
    });
    console.log(response);
    if (response.status === 200) {
      dispatch({ type: "TOGGLE_WATCH_LATER", payload: videoId });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const removeFromWatchLater = async (videoId, dispatch) => {
  try {
    const response = await axios.delete(`${API_URL}/watch-later/${videoId}`);
    console.log(response);
    if (response.status === 201) {
      dispatch({ type: "TOGGLE_WATCH_LATER", payload: videoId });
    }
  } catch (error) {
    console.log(error.message);
  }
};

import axios from "axios";
import { API_URL } from "../../constants";

export const addToHistory = async (videoId, dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/history`, {
      video: { id: videoId },
    });

    if (response.status === 200) {
      dispatch({ type: "ADD_TO_HISTORY", payload: videoId });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const removeFromHistory = async (videoId, dispatch) => {
  try {
    const response = await axios.delete(`${API_URL}/history/${videoId}`);
    console.log(response);
    if (response.status === 200) {
      dispatch({ type: "REMOVE_FROM_HISTORY", payload: { videoId } });
    }
  } catch (error) {
    console.log(error.message);
  }
};

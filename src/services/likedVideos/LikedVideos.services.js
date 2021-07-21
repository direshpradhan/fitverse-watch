import axios from "axios";
import { API_URL } from "../../constants";

export const addToLikedVideos = async (videoId, dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/liked-videos`, {
      video: { id: videoId },
    });

    if (response.status === 200) {
      dispatch({ type: "LIKE_UNLIKE", payload: videoId });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const removeFromLikedVideos = async (videoId, dispatch) => {
  try {
    const response = await axios.delete(`${API_URL}/liked-videos/${videoId}`);
    console.log(response);
    if (response.status === 201) {
      console.log("service dispatch");
      dispatch({ type: "LIKE_UNLIKE", payload: videoId });
    }
  } catch (error) {
    console.log(error.message);
  }
};

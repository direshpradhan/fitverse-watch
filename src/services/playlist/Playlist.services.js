import axios from "axios";
import { API_URL } from "../../constants";

export const createPlaylist = async (videoId, playlistName, dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/playlist`, {
      video: { id: videoId, name: playlistName },
    });
    console.log(response.data);
    if (response.status === 200) {
      console.log(response.data.newPlaylist._id);
      dispatch({
        type: "CREATE_PLAYLIST",
        payload: {
          playlistName,
          videoId,
          playlistId: response.data.newPlaylist._id,
        },
      });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const addToPlaylist = async ({
  videoId,
  playlistId,
  playlistName,
  dispatch,
}) => {
  try {
    const response = await axios.post(`${API_URL}/playlist`, {
      video: { id: videoId, name: playlistName },
    });

    if (response.status === 200) {
      dispatch({ type: "ADD_TO_PLAYLIST", payload: { playlistId, videoId } });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const updatePlaylistName = async (
  playlistId,
  newPlaylistName,
  dispatch
) => {
  try {
    const response = await axios.post(`${API_URL}/playlist/${playlistId}`, {
      playlist: { name: newPlaylistName },
    });

    if (response.status === 200) {
      dispatch({
        type: "RENAME_PLAYLIST",
        payload: { id: playlistId, name: newPlaylistName },
      });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const removeVideoFromPlaylist = async (
  videoId,
  playlistId,
  dispatch
) => {
  try {
    const response = await axios.delete(
      `${API_URL}/playlist/${playlistId}/${videoId}`
    );

    if (response.status === 200) {
      dispatch({ type: "ADD_TO_PLAYLIST", payload: { playlistId, videoId } });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const clearPlaylist = async (playlistId, dispatch) => {
  try {
    const response = await axios.delete(`${API_URL}/playlist/`);

    if (response.status === 200) {
      dispatch({ type: "CLEAR_PLAYLIST", payload: playlistId });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const deletePlaylist = async (playlistId, dispatch) => {
  try {
    const response = await axios.delete(`${API_URL}/playlist/${playlistId}`);

    if (response.status === 200) {
      dispatch({ type: "DELETE_PLAYLIST", payload: { playlistId } });
    }
  } catch (error) {
    console.error(error.message);
  }
};

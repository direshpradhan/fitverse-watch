import { v4 as uuid } from "uuid";

export const initialState = {
  watchLater: [],
  liked: [],
  history: [],
  playlist: [{ id: 1, name: "abc", videos: ["dI0O8TnC2d8", "AXZlb-3MMYE"] }],
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_WATCH_LATER":
      const isInWatchLater = state.watchLater.find(
        (video) => video.id === payload.id
      );
      if (!isInWatchLater) {
        return { ...state, watchLater: [...state.watchLater, payload] };
      }
      return state;

    case "LIKE_UNLIKE":
      const isInLikedVideos = state.liked.find(
        (video) => video.id === payload.id
      );

      if (!isInLikedVideos) {
        return { ...state, liked: [...state.liked, payload] };
      }
      return {
        ...state,
        liked: state.liked.filter((video) => video.id !== payload.id),
      };

    case "CREATE_PLAYLIST":
      return {
        ...state,
        playlist: [
          ...state.playlist,
          { id: uuid(), name: payload.playlistName, videos: [payload.videoId] },
        ],
      };

    case "ADD_TO_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.map((playlistItem) => {
          if (playlistItem.id === payload.playlistId) {
            return {
              ...playlistItem,
              videos: playlistItem.videos.find(
                (playlistVideo) => playlistVideo === payload.videoId
              )
                ? playlistItem.videos.filter(
                    (playlistVideo) => playlistVideo !== payload.videoId
                  )
                : [...playlistItem.videos, payload.videoId],
            };
          }
          return playlistItem;
        }),
      };

    case "RENAME_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.map((playlistItem) => {
          if (playlistItem.id === payload.id) {
            return { ...playlistItem, name: payload.name };
          }
          return playlistItem;
        }),
      };

    case "CLEAR_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.map((playlistItem) => {
          if (playlistItem.id === payload) {
            return { ...playlistItem, videos: [] };
          }
          return playlistItem;
        }),
      };

    case "ADD_TO_HISTORY":
      const isInHistory = state.history.find(
        (historyItem) => historyItem.id === payload.id
      );

      if (!isInHistory) {
        return { ...state, history: [...state.history, payload] };
      }
      return state;

    default:
      break;
  }
};

import { reducer } from "./reducer";

describe("playlist test", () => {
  test("should create a playlist and add the current video in it", () => {
    const initialState = {
      playlist: [],
    };

    const action = {
      type: "CREATE_PLAYLIST",
      payload: {
        playlistName: "playlist 1",
        videoId: "123",
        playlistId: "p123",
      },
    };

    const finalState = {
      playlist: [
        {
          _id: "p123",
          name: "playlist 1",
          videos: ["123"],
        },
      ],
    };

    const state = reducer(initialState, action);
    expect(state).toEqual(finalState);
  });

  test("should add video to playlist", () => {
    const initialState = {
      playlist: [
        {
          _id: "p123",
          name: "playlist 1",
          videos: ["123"],
        },
      ],
    };

    const action = {
      type: "TOGGLE_PLAYLIST_VIDEO",
      payload: {
        playlistId: "p123",
        videoId: "124",
      },
    };

    const finalState = {
      playlist: [
        {
          _id: "p123",
          name: "playlist 1",
          videos: ["123", "124"],
        },
      ],
    };

    const state = reducer(initialState, action);
    expect(state).toEqual(finalState);
  });

  test("should remove video to playlist", () => {
    const initialState = {
      playlist: [
        {
          _id: "p123",
          name: "playlist 1",
          videos: ["123", "124"],
        },
      ],
    };

    const action = {
      type: "TOGGLE_PLAYLIST_VIDEO",
      payload: {
        playlistId: "p123",
        videoId: "124",
      },
    };

    const finalState = {
      playlist: [
        {
          _id: "p123",
          name: "playlist 1",
          videos: ["123"],
        },
      ],
    };

    const state = reducer(initialState, action);
    expect(state).toEqual(finalState);
  });

  test("should rename playlist", () => {
    const initialState = {
      playlist: [
        {
          _id: "p123",
          name: "playlist 1",
          videos: ["123"],
        },
      ],
    };

    const action = {
      type: "RENAME_PLAYLIST",
      payload: {
        id: "p123",
        name: "playlist 2",
      },
    };

    const finalState = {
      playlist: [
        {
          _id: "p123",
          name: "playlist 2",
          videos: ["123"],
        },
      ],
    };

    const state = reducer(initialState, action);
    expect(state).toEqual(finalState);
  });

  test("should remove all videos from playlist", () => {
    const initialState = {
      playlist: [
        {
          _id: "p123",
          name: "playlist 1",
          videos: ["123", "124", "125"],
        },
      ],
    };

    const action = {
      type: "CLEAR_PLAYLIST",
      payload: "p123",
    };

    const finalState = {
      playlist: [
        {
          _id: "p123",
          name: "playlist 1",
          videos: [],
        },
      ],
    };

    const state = reducer(initialState, action);
    expect(state).toEqual(finalState);
  });

  test("should delete playlist", () => {
    const initialState = {
      playlist: [
        {
          _id: "p123",
          name: "playlist 1",
          videos: ["123", "124"],
        },
        {
          _id: "p124",
          name: "playlist 2",
          videos: ["124", "125"],
        },
      ],
    };

    const action = {
      type: "DELETE_PLAYLIST",
      payload: { playlistId: "p123" },
    };

    const finalState = {
      playlist: [
        {
          _id: "p124",
          name: "playlist 2",
          videos: ["124", "125"],
        },
      ],
    };

    const state = reducer(initialState, action);
    expect(state).toEqual(finalState);
  });
});

describe("watch later test", () => {
  test("should add video to watch later", () => {
    const initialState = {
      watchLater: [],
    };

    const action = {
      type: "TOGGLE_WATCH_LATER",
      payload: "123",
    };

    const finalState = {
      watchLater: ["123"],
    };

    const state = reducer(initialState, action);
    expect(state).toEqual(finalState);
  });

  test("should remove video from watch later", () => {
    const initialState = {
      watchLater: ["123", "124"],
    };

    const action = {
      type: "TOGGLE_WATCH_LATER",
      payload: "123",
    };

    const finalState = {
      watchLater: ["124"],
    };

    const state = reducer(initialState, action);
    expect(state).toEqual(finalState);
  });
});

describe("liked videos test", () => {
  test("should add video to liked videos", () => {
    const initialState = {
      likedVideos: [],
    };

    const action = {
      type: "LIKE_UNLIKE",
      payload: "123",
    };

    const finalState = {
      likedVideos: ["123"],
    };

    const state = reducer(initialState, action);
    expect(state).toEqual(finalState);
  });

  test("should remove video from liked videos", () => {
    const initialState = {
      likedVideos: ["123", "124"],
    };

    const action = {
      type: "LIKE_UNLIKE",
      payload: "123",
    };

    const finalState = {
      likedVideos: ["124"],
    };

    const state = reducer(initialState, action);
    expect(state).toEqual(finalState);
  });
});

describe("history test", () => {
  test("should add video to history", () => {
    const initialState = {
      history: [],
    };

    const action = {
      type: "ADD_TO_HISTORY",
      payload: "123",
    };

    const finalState = {
      history: ["123"],
    };

    const state = reducer(initialState, action);
    expect(state).toEqual(finalState);
  });

  test("should remove video from history", () => {
    const initialState = {
      history: ["123", "124"],
    };

    const action = {
      type: "REMOVE_FROM_HISTORY",
      payload: { videoId: "124" },
    };

    const finalState = {
      history: ["123"],
    };

    const state = reducer(initialState, action);
    expect(state).toEqual(finalState);
  });
});

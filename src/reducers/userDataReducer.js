const userDataReducer = (userDataState, { type, payload }) => {
  switch (type) {
    case "FETCH_LIKED_VIDEOS":
      return {
        ...userDataState,
        likedVideos: [...payload],
      };

    case "UPDATE_LIKED_VIDEOS":
      return { ...userDataState, likedVideos: [...payload] };

    case "FETCH_WATCH_LATER":
      return {
        ...userDataState,
        watchlater: [...payload],
      };

    case "UPDATE_WATCH_LATER":
      return { ...userDataState, watchlater: [...payload] };

    default:
      return userDataState;
  }
};

export { userDataReducer };

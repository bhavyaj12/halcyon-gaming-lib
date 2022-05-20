const videosReducer = (videosState, { type, payload }) => {
  switch (type) {
    case "FETCH_VIDEOS":
      return { ...videosState, videos: payload, videosLoading: false };

    default:
      return videosState;
  }
};

export { videosReducer };

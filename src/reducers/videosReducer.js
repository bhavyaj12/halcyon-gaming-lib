const videosReducer = (videosState, { type, payload }) => {
  switch (type) {
    case "FETCH_VIDEOS":
      return { ...videosState, videos: payload, videosLoading: false };

    case "SET_SEARCH_QUERY":
      return { ...videosState, searchQuery: payload };

    default:
      return videosState;
  }
};

export { videosReducer };

const checkVideoInWatchLater = (ID, watchlater) => {
  return watchlater.some(({ _id }) => _id === ID);
};

export { checkVideoInWatchLater };

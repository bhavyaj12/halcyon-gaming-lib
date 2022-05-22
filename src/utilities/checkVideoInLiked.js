export const checkVideoInLiked = (ID, likedVideos) => {
  return likedVideos.some(({ _id }) => _id === ID);
};

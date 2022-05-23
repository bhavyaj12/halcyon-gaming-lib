import { fetchCategories } from "./services/fetchCategories";
import { loginService } from "./services/loginService";
import { signupService } from "./services/signupService";
import { getActiveStyle } from "./getActiveStyle";
import { getActiveStyleSide } from "./getActiveStyleSide";
import { fetchVideos } from "./services/fetchVideos";
import { addToLiked, removeFromLiked } from "./services/videoLikeService";
import { checkVideoInLiked } from "./checkVideoInLiked";
import { getUserLiked, getUserWatchLater, getUserPlaylists } from "./services/fetchUserData";
import {
  addToWatchLater,
  removeFromWatchLater,
} from "./services/videoWatchLaterService";
import { checkVideoInWatchLater } from "./checkVideoInWatchLater";
import {
  addToPlaylist,
  removeFromPlaylist,
  addNewPlaylist,
  deletePlaylist
} from "./services/videoPlaylistService";

export {
  fetchCategories,
  loginService,
  signupService,
  getActiveStyle,
  getActiveStyleSide,
  fetchVideos,
  addToLiked,
  removeFromLiked,
  checkVideoInLiked,
  getUserLiked,
  addToWatchLater,
  removeFromWatchLater,
  checkVideoInWatchLater,
  getUserWatchLater,
  addToPlaylist,
  removeFromPlaylist,
  addNewPlaylist,
  deletePlaylist,
  getUserPlaylists
};

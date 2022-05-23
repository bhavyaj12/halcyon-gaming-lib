import axios from "axios";

const addToPlaylist = async (
  showToast,
  userDataDispatch,
  token,
  playlistId,
  video
) => {
  console.log("From addtoplaylist video", video);
  try {
    const {
      data: { playlist },
    } = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video: { ...video } },
      {
        headers: { authorization: token },
      }
    );
    console.log("playlist", playlist);
    userDataDispatch({ type: "UPDATE_PLAYLIST", payload: playlist });
    showToast("success", "Added video to playlist.");
  } catch (error) {
    console.log(error.message);
    showToast("error", "Couldn't add video to playlist. Try again later.");
  }
};

const removeFromPlaylist = async (
  showToast,
  userDataDispatch,
  token,
  playlistId,
  videoId
) => {
  try {
    const {
      data: { playlist },
    } = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
      headers: { authorization: token },
    });
    console.log("playlist after remove video", playlist);
    userDataDispatch({ type: "UPDATE_PLAYLIST", payload: playlist });
    showToast("success", "Removed video from playlist.");
  } catch (error) {
    console.log(error);
    showToast("error", "Couldn't remove video from playlist. Try again later.");
  }
};

const addNewPlaylist = async (
  showToast,
  newPlaylist,
  token,
  userDataDispatch
) => {
  try {
    const {
      data: { playlists },
    } = await axios.post(
      `/api/user/playlists`,
      { playlist: { title: newPlaylist, description: "" } },
      {
        headers: { authorization: token },
      }
    );
    console.log("playlist after new pl", playlists);
    userDataDispatch({ type: "SET_PLAYLISTS", payload: playlists });
    showToast("success", "Added new playlist.");
  } catch (error) {
    console.log(error);
    showToast("error", "Couldn't add a new playlist. Try again later.");
  }
};

const deletePlaylist = async (
  showToast,
  token,
  userDataDispatch,
  playlistId
) => {
  try {
    const {
      data: { playlists },
    } = await axios.delete(
      `/api/user/playlists/${playlistId}`,
      {
        headers: { authorization: token },
      }
    );
    console.log("playlist after deleting pl", playlists);
    userDataDispatch({ type: "SET_PLAYLISTS", payload: playlists });
    showToast("success", "Deleted playlist.");
  } catch (error) {
    console.log(error);
    showToast("error", "Couldn't deleted playlist. Try again later.");
  }
};


export { addToPlaylist, removeFromPlaylist, addNewPlaylist, deletePlaylist };

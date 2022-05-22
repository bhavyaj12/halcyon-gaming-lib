import axios from "axios";
import { useToast } from "custom-hooks";

const getUserLiked = async (token, userDataDispatch) => {
  const { showToast } = useToast();
  try {
    const {
      data: { likes },
    } = await axios.get(`/api/user/likes`, {
      headers: { authorization: token },
    });
    console.log(likes);
    userDataDispatch({ type: "FETCH_LIKED_VIDEOS", payload: likes });
  } catch (error) {
    console.log(error.message);
    showToast("error", "Couldn't fetch user's liked videos, try again later.");
  }
};

const getUserWatchLater = async (token, userDataDispatch) => {
  const { showToast } = useToast();
  try {
    const {
      data: { watchlater },
    } = await axios.get(`/api/user/watchlater`, {
      headers: { authorization: token },
    });
    userDataDispatch({ type: "FETCH_WATCH_LATER", payload: watchlater });
  } catch (error) {
    console.log(error.message);
    showToast("error", "Couldn't fetch user's watch later videos, try again later.");
  }
};

export { getUserLiked, getUserWatchLater };

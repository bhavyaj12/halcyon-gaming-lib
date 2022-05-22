import { createContext, useContext, useReducer, useEffect } from "react";
import { userDataReducer } from "reducers";
import { useAuth } from "contexts";
import { getUserLiked, getUserWatchLater } from "utilities";

const UserDataContext = createContext();

const initUserData = {
  likedVideos: [],
  history: [],
  watchlater: [],
  playlists: [],
};

const UserDataProvider = ({ children }) => {
  const [userDataState, userDataDispatch] = useReducer(
    userDataReducer,
    initUserData
  );
  const {
    auth: { isAuth, token },
  } = useAuth();

  useEffect(() => {
    if(isAuth) {
      getUserLiked(token, userDataDispatch);
      getUserWatchLater(token, userDataDispatch);
    }
  }, [isAuth]);

  return (
    <UserDataContext.Provider value={{ userDataState, userDataDispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};

const useUserData = () => useContext(UserDataContext);

export { useUserData, UserDataProvider };

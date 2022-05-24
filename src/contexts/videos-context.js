import { createContext, useContext, useReducer, useEffect } from "react";
import { videosReducer } from "reducers";
import { fetchVideos, searchVideos } from "utilities";
import { useToast } from "custom-hooks";

const VideosContext = createContext();

const initVideos = {
  videos: [],
  videosLoading: true,
  searchQuery: "",
};

const { showToast } = useToast();

const VideosProvider = ({ children }) => {
  const [videosState, videosDispatch] = useReducer(videosReducer, initVideos);

  const getVideos = async () => {
    try {
      const {
        data: { videos },
      } = await fetchVideos();
      videosDispatch({ type: "FETCH_VIDEOS", payload: videos });
    } catch (error) {
      showToast("error", "Can't fetch videos. Refresh and try again.");
      console.log(error.message);
    }
  };

  const { videos, searchQuery, videosLoading } = videosState;

  const getSearchResultVideos = searchVideos(videos, searchQuery);  

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <VideosContext.Provider value={{ videosLoading, searchQuery, videos: getSearchResultVideos, videosDispatch }}>
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => useContext(VideosContext);

export { useVideos, VideosProvider };

import { useState } from "react";
import { NavigationSide, CategoryFilter } from "components";
import { VideoCard } from "components";
import { useVideos } from "contexts";
import "./explore-page.css";

const ExplorePage = () => {
  const { videosState } = useVideos();
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(videosState.videosLoading);
  }, 1500);
  const loadingVideosMsg = (
    <div className="mt-4">
      <p className="alert alert-container alert-primary txt-normal">
        Loading Videos...
      </p>
    </div>
  );
  return (
    <section className="video-main-content">
      <div className="video-grid-item">
        <NavigationSide />
      </div>
      {loader ? (
        loadingVideosMsg
      ) : (
        <>
          <main className="video-grid-item" id="video-main">
            <CategoryFilter />
            <section className="video-container">
              {videosState.videos.map((video) => {
                return <VideoCard video={video} key={video._id} />;
              })}
            </section>
          </main>
        </>
      )}
    </section>
  );
};

export default ExplorePage;

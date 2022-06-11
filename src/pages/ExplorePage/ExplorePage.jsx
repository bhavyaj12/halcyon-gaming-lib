import { useEffect, useState } from "react";
import { NavigationSide } from "components";
import { VideoCard, CategoryFilter } from "components";
import { useVideos } from "contexts";
import "./explore-page.css";

const ExplorePage = () => {
  const { videosLoading, videos } =
    useVideos();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    return () => {
      setLoader(true);
    };
  }, []);

  setTimeout(() => {
    if (!videosLoading) setLoader(videosLoading);
  }, 1000);

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
              {videos.map((video) => {
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

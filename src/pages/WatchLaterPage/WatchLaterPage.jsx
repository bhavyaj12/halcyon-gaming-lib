import { NavigationSide } from "components";
import { VideoCard } from "components";
import { useUserData } from "contexts";

const WatchLaterPage = () => {
  const {
    userDataState: { watchlater },
  } = useUserData();

  return (
    <section className="video-main-content">
      <div className="video-grid-item">
        <NavigationSide />
      </div>
      <main className="video-grid-item" id="video-main">
        <section className="video-container">
          <div className="flex">
            {watchlater.length > 0 ? (
              watchlater.map((video) => {
                return <VideoCard video={video} key={video._id} />;
              })
            ) : (
              <>
                <div className="alert alert-container alert-error">
                  You do not have any videos in watch later. Add to watch later
                  from the explore page.
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </section>
  );
};

export default WatchLaterPage;

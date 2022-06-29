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
        <h5 className="h5 px-8 pt-8 text-center">
          Watch Later: {watchlater?.length}
        </h5>

        {watchlater.length > 0 ? (
          watchlater.map((video) => {
            return (
              <section className="video-container">
                <div className="flex-cards">
                  <VideoCard video={video} key={video._id} />
                </div>
              </section>
            );
          })
        ) : (
          <div className="container-center">
            <div className="alert alert-container alert-error">
              You do not have any videos in watch later. Add to watch later from
              the explore page.
            </div>
          </div>
        )}
      </main>
    </section>
  );
};

export default WatchLaterPage;

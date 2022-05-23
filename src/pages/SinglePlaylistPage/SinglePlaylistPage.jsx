import { useParams } from "react-router-dom";
import { NavigationSide } from "components";
import { useUserData } from "contexts";
import { PlaylistVideos } from "components";

const SinglePlaylistPage = () => {
  const playlistId = useParams("playlistId").playlistId;
  const {
    userDataState: { playlists },
  } = useUserData();

  const playlist = playlists.find((item) => item._id === playlistId);

  return (
    <section className="video-main-content">
      <div className="video-grid-item">
        <NavigationSide />
      </div>
      <main className="video-grid-item" id="video-main">
        <h3 className="h3 px-8 pt-8">Playlist: {playlist.title}</h3>
        <section className="video-container">
          <div className="flex">
            {playlist.videos.map((video) => {
              return (
                <PlaylistVideos
                  video={video}
                  playlistId={playlist._id}
                  key={playlist._id}
                />
              );
            })}
          </div>
        </section>
      </main>
    </section>
  );
};

export default SinglePlaylistPage;

import { NavigationSide } from "components";

const HistoryPage = () => {
  return (
    <>
      <section className="video-main-content">
        <div className="video-grid-item">
          <NavigationSide />
        </div>
        <main className="video-grid-item" id="video-main">
          <div className="alert alert-container">
            <h2 className="h2">This is History Page. It is a private route.</h2>
          </div>
        </main>
      </section>
    </>
  );
};

export default HistoryPage;

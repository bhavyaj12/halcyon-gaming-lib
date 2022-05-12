import { HomeCarousel, CategoryList } from "components";
import YouTubeIcon from '@mui/icons-material/YouTube';
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import "styles/main.css";
import "./home-page.css";

const HomePage = () => {
  return (
    <div>
      <HomeCarousel />
      <div className="container-center">
        <h3 className="h3 pt-8">Categories</h3>
      </div>
      <CategoryList />
      <section className="video-home-grid mt-8">
        <div className="container-center flex-col mb-5">
          <h3 className="home-heading pt-8">Unlock the power</h3>
          <h3 className="home-heading pt-8">And game like never before</h3>
        </div>
        <div class="grid-col-3">
          <div class="grid-col-item">
            <YouTubeIcon sx={{ fontSize: "80px" }} />
            <p className="txt-normal my-3">
              Access multiple videos, walkthroughs and more in one place
            </p>
          </div>
          <div class="grid-col-item">
            <SubscriptionsIcon sx={{ fontSize: "80px" }} />
            <p className="txt-normal my-3">
              Manage your videos and keep track of all them using Watch Later and new created playlists
            </p>
          </div>
          <div class="grid-col-item">
              <div class="col-text">
                <ThumbUpIcon sx={{ fontSize: "80px" }} />
                <p className="txt-normal my-3">
                  Like, unlike options in videos to track them using liked videos in one place 
                </p>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

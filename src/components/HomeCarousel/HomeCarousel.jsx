import { Carousel } from "react-responsive-carousel";
import "styles/main.css";
import "./home-carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const carouselImg = [
  {
    id: "witcher3",
    img: "assets/banner-1.jpg",
  },
  {
    id: "horizon",
    img: "assets/banner-2.jpg",
  },
  {
    id: "aco",
    img: "assets/banner-3.jpg",
  },
];

const HomeCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {carouselImg.map((banner) => {
        return (
          <div key={banner.id}  className="carousel-show">
            <img alt="carousel image" src={banner.img} className="slider-img" />
            <div className="legend" id="legend">
              <button className="button btn-solid button-primary">Watch Now</button>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default HomeCarousel;

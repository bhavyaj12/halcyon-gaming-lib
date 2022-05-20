import { Link } from "react-router-dom";
import { useState } from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import CloseIcon from "@mui/icons-material/Close";
import {
  FavoriteBorderOutlined,
  WatchLaterOutlined,
} from "@mui/icons-material";
import "./video-card.css";

const VideoCard = ({ video }) => {
  const {
    _id,
    thumbnail,
    title,
    creatorAvatar,
    creator,
    duration,
    views,
    category,
  } = video;
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="card card-vertical card-shadow" id={_id}>
      <div className="p-3 img-badge-container">
        <img
          src={thumbnail}
          alt="Video Thumbnail"
          className="img-responsive vt-card-img"
        />
      </div>
      <div className="vt-card-text">
        <div className="video-card-head">
          <img
            src={creatorAvatar}
            alt="Small Avatar"
            className="avatar avatar-sm"
          />
          <div className="px-2">
            <h2>{title}</h2>
            <p className="card-brand-name my-2">{creator}</p>
            <span className="rating d-inline">
              {views} views
              <span className="text-small"> • {duration}</span>
            </span>
          </div>
        </div>
        <div className="card-price">
          <span className="alert-container alert-primary txt-small category-tag">
            {category}
          </span>
          <button
            className="button btn-solid button-primary"
            onClick={() => setDropDown(!dropDown)}
          >
            <MoreVertOutlinedIcon />
          </button>
          {dropDown && (
            <div className="flex-row p-3 drop-down">
              <div>
                <button className="m-1">
                  <span className="mx-2" >
                    <WatchLaterOutlined />
                  </span>
                  Watch Later
                </button>
                <button className="m-1">
                  <span className="mx-2">
                    <PlaylistAddIcon />
                  </span>
                  Add to playlist
                </button>
                <button className="m-1">
                  <span className="mx-2">
                    <FavoriteBorderOutlined />
                  </span>
                  Add to Liked Videos
                </button>
              </div>
              <button className="m-1" onClick={() => setDropDown(false)}>
                <CloseIcon />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

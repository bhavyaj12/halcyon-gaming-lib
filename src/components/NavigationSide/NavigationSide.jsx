import { NavLink } from "react-router-dom";
import { getActiveStyleSide } from "utilities";
import {
	ExploreOutlined,
	VideoLibraryOutlined,
	FavoriteBorderOutlined,
	WatchLaterOutlined,
	HistoryOutlined,
} from "@mui/icons-material";
import "./navigation-side.css";

const NavigationSide = () => {
  return (
    <div className="sidebar" id="video-sidebar">
      <div className="sidebar-links mt-8">
        <NavLink to="/explore" style={getActiveStyleSide}><ExploreOutlined />Explore</NavLink>
        <NavLink to="/" style={getActiveStyleSide}><VideoLibraryOutlined />Playlist</NavLink>
        <NavLink to="/" style={getActiveStyleSide}><FavoriteBorderOutlined />Liked</NavLink>
        <NavLink to="/" style={getActiveStyleSide}><WatchLaterOutlined />Watch Later</NavLink>
        <NavLink to="/" style={getActiveStyleSide}><HistoryOutlined />History</NavLink>
      </div>
    </div>
  );
};

export default NavigationSide;
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { DarkMode, LightMode, Menu } from "@mui/icons-material";
import { darkLogo, lightLogo } from "assets";
import { useTheme, useAuth, useVideos } from "contexts";
import { useToast } from "custom-hooks";
import { getActiveStyle, searchVideos } from "utilities";
import "./navigation-top.css";

const NavigationTop = () => {
  const { theme, setTheme } = useTheme();
  const { auth, setAuth } = useAuth();
  const { showToast } = useToast();
  const { searchQuery, videosDispatch } = useVideos();
  const navigate = useNavigate();
  const location = useLocation();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const signOutFunc = () => {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("user");
    setAuth({
      isAuth: false,
      token: null,
      user: {},
    });
    showToast("success", "Logged out.");
    navigate("/", { replace: true });
  };

  const changeTheme = () =>
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

  useEffect(() => {
    localStorage.setItem("halcyon-gaming-theme", theme);
  }, [theme]);

  useEffect(() => {
    if(hamburgerOpen) {
      setHamburgerOpen(false);
    }
  }, [location]);

  const handleSearchInput = (e) => {
    videosDispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value });
  };

  return (
    <header id="header">
      <nav className="store-nav-bar">
        <div className="store-logo-box">
          <NavLink to="/">
            {theme === "dark" ? (
              <img src={darkLogo} alt="logo" className="store-logo" />
            ) : (
              <img src={lightLogo} alt="logo" className="store-logo" />
            )}
          </NavLink>
        </div>
        <button
          className="video-hamburger-btn"
          onClick={() => {
            setHamburgerOpen(!hamburgerOpen);
          }}
        >
          <Menu />
        </button>
        <div
          className={hamburgerOpen ? "store-nav hamburger-open" : "store-nav"}
        >
          <ul className="store-nav-links ul-no-decor display-flex">
            {location.pathname === "/explore" && (
              <li className="search-bar">
                <input
                  type="search"
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={handleSearchInput}
                />
                <label className="search-bar-icon">
                  <span className="fas fa-search"></span>
                </label>
              </li>
            )}
            <li>
              <NavLink
                to="/"
                style={getActiveStyle}
                className="button button-primary button-link active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explore"
                style={getActiveStyle}
                className="button button-primary button-link"
              >
                Explore
              </NavLink>
            </li>

            {auth.isAuth === true ? (
              <>
                <li>
                  <NavLink to="/" className="button button-primary button-link">
                    <i className="fas fa-user"></i>Account
                  </NavLink>
                </li>
                <div className="sidebar-links">
                  <li>
                    <NavLink
                      to="/playlists"
                      style={getActiveStyle}
                      className="button button-primary button-link"
                    >
                      Playlist
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/liked-videos"
                      style={getActiveStyle}
                      className="button button-primary button-link"
                    >
                      Liked
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/watch-later"
                      style={getActiveStyle}
                      className="button button-primary button-link"
                    >
                      Watch Later
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/history"
                      className="button button-primary button-link"
                    >
                      History
                    </NavLink>
                  </li>
                </div>
                <li>
                  <button
                    className="btn btn-logout"
                    onClick={() => signOutFunc(setAuth)}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  style={getActiveStyle}
                  className="button button-primary button-link"
                >
                  <i className="fas fa-user"></i>Login
                </NavLink>
              </li>
            )}

            <li>
              <button
                className="button button-primary button-link theme-btn"
                onClick={changeTheme}
              >
                {theme === "dark" ? <DarkMode /> : <LightMode />}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavigationTop;

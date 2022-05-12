import React, { useEffect, useState } from "react";
import { DarkMode, LightMode, Menu } from "@mui/icons-material";
import { darkLogo, lightLogo } from "assets";
import { useTheme } from "contexts/theme-context";
import "./navigation-top.css";

const NavigationTop = () => {
  const { theme, setTheme } = useTheme();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const changeTheme = () =>
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

  useEffect(() => {
    localStorage.setItem("halcyon-gaming-theme", theme);
  }, [theme]);

  return (
    <header id="header">
      <nav className="store-nav-bar">
        <div className="store-logo-box">
          {theme === "dark" ? (
            <img src={darkLogo} alt="logo" className="store-logo" />
          ) : (
            <img src={lightLogo} alt="logo" className="store-logo" />
          )}
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
            <li className="search-bar">
              <input type="search" placeholder="Search videos " />
              <label className="search-bar-icon">
                <span className="fas fa-search"></span>
              </label>
            </li>
            <li>
              <a href="/" className="button button-primary button-link active">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="button button-primary button-link">
                Explore
              </a>
            </li>
            <li>
              <a href="/" className="button button-primary button-link">
                <i className="fas fa-user"></i>Account
              </a>
            </li>
            <li>
              <button
                href="/"
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

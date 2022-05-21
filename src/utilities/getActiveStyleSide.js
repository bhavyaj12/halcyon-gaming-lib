const getActiveStyleSide = ({ isActive }) => ({
    backgroundColor: isActive ? "var(--theme-dark-hamburger-bg)" : "",
    color: isActive ? "var(--vid-secondary-light)" : "",
    borderBottom: isActive ? "2px solid var(--vid-secondary-color)" : "",
});

export { getActiveStyleSide };  
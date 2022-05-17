const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "var(--vid-light-grey)" : "",
    borderBottom: isActive ? "1px solid var(--vid-light-grey)" : "",
});

export { getActiveStyle };  
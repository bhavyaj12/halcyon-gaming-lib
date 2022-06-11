import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { NavigationTop, Footer, Toast } from "components";
import { useTheme } from "contexts";
import { Routes } from "routes";
import "styles/main.css";

function App() {
  const { theme } = useTheme();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const memoizedFooter = useMemo(() => {
    return <Footer />;
  }, []);
  
  return (
    <div className={`App ${theme}`}>
      <NavigationTop />
      <Toast />
      <Routes />
      {memoizedFooter}
    </div>
  );
}

export default App;

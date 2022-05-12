import { NavigationTop, Footer } from "components";
import { useTheme } from "contexts";
import { Routes } from "routes";
import "styles/main.css";
import "App.css";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme}`}>
      <NavigationTop />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;

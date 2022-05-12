import { NavigationTop } from "components";
import { useTheme } from "contexts/theme-context";
import "styles/main.css";
import "App.css";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme}`}>
      <NavigationTop />
      <div className="page-container">
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default App;

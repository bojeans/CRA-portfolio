import LandingPage from "./components/LandingPage";
import { DarkModeProvider } from "./components/utils/DarkModeContext";

const App = () => {
  return (
    <DarkModeProvider>
      <LandingPage />
    </DarkModeProvider>
  );
};

export default App;

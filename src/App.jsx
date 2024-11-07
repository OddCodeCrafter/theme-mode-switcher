import Card from "./components/Card";
import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./contexts/themeContext";
import { useState, useEffect } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightMode = () => {
    setThemeMode("light");
  };

  const darkMode = () => {
    setThemeMode("dark");
  };

  //Actual Change in Theme
  useEffect(() => {
    const htmlCLassList = document.querySelector("html").classList;
    htmlCLassList.remove("dark", "light");
    htmlCLassList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

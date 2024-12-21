import React, { useState } from "react";
import "./App.css";
import ToggleButton from "./components/Toggle/ToggleButton";

const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(true);

  const handleToggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`App`} data-theme={`${isDark ? "dark" : "light"}`}>
      <ToggleButton toggleDarkTheme={handleToggleTheme} />
      <h1 className="title">Hello World</h1>
      <div className="box">
        <h2>This is a box.</h2>
      </div>
    </div>
  );
};

export default App;

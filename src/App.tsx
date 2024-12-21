import React, { useState } from "react";
import "./App.css";
import ToggleButton from "./components/Toggle/ToggleButton";

const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(true);

  return (
    <div className={`App`} data-theme={`${isDark ? "dark" : "light"}`}>
      <ToggleButton />
      <h1 className="title">Hello World</h1>
      <div className="box">
        <h2>This is a box.</h2>
      </div>
    </div>
  );
};

export default App;

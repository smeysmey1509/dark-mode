import React, { useState } from "react";
import "./ToggleButton.scss";

interface ToggleButtonProps {
  toggleDarkTheme: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ toggleDarkTheme }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    toggleDarkTheme();
  };

  return (
    <div className="toggle-button" onClick={handleToggle}>
      <div className={`toggle-thumb ${isToggled ? "active" : ""}`} />
      <span className="toggle-label">{isToggled ? "On" : "Off"}</span>
    </div>
  );
};

export default ToggleButton;

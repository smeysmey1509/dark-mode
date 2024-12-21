import React, { useState } from "react";
import "./ToggleButton.scss";

const ToggleButton: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="toggle-button" onClick={handleToggle}>
      <div className={`toggle-thumb ${isToggled ? "active" : ""}`} />
      <span className="toggle-label">{isToggled ? "On" : "Off"}</span>
    </div>
  );
};

export default ToggleButton;

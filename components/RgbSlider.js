import React, { useState } from "react";
import "../App.css";

const RGBSliderWidget = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleRedChange = (event) => {
    setRed(event.target.value);
  };

  const handleGreenChange = (event) => {
    setGreen(event.target.value);
  };

  const handleBlueChange = (event) => {
    setBlue(event.target.value);
  };

  const getColorStyle = () => {
    return {
      backgroundColor: `rgba(${red}, ${green}, ${blue})`,
    };
  };

  return (
    <div className="RGBSliderWidget">
      <div className="color-box" style={getColorStyle()}></div>
      <label>
        Red: {red}
        <input
          type="range"
          min="0"
          max="255"
          value={red}
          onChange={handleRedChange}
        />
      </label>
      <label>
        Green: {green}
        <input
          type="range"
          min="0"
          max="255"
          value={green}
          onChange={handleGreenChange}
        />
      </label>
      <label>
        Blue: {blue}
        <input
          type="range"
          min="0"
          max="255"
          value={blue}
          onChange={handleBlueChange}
        />
      </label>
    </div>
  );
};

export default RGBSliderWidget;

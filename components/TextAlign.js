import React, { useState } from "react";
import "../App.css";

const TextAlignment = () => {
  const [alignment, setAlignment] = useState("center");

  const handleAlignment = (newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="TextAlign">
      <div style={{ width: "100%" }}>
        <div style={{ textAlign: alignment }}>Align me!</div>
      </div>
      <button onClick={() => handleAlignment("left")}>Left</button>
      <button onClick={() => handleAlignment("center")}>center</button>
      <button onClick={() => handleAlignment("right")}>Right</button>
    </div>
  );
};

export default TextAlignment;

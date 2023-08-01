import React, { useState } from "react";
import "../App.css";

const ColorChanger = () => {
  const [color, setColor] = useState("");
  const [text, setText] = useState("");
  const [isText, setIsText] = useState(false);

  function handleInputChange(event) {
    setIsText(false);
    setColor(event.target.value);
  }

  function handleUpdateButtonClick() {
    setIsText(true);
    setText(color);
    setColor(color);
  }

  return (
    <div className="ColorChanger">
      {isText === true ? <h1 style={{ color: color }}>{text}</h1> : null}
      <input type="text" onChange={handleInputChange} />
      <button className="update" onClick={handleUpdateButtonClick}>
        Update
      </button>
    </div>
  );
};

export default ColorChanger;

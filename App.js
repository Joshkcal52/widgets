import React from "react";
import "./App.css";
import Counter from "./components/Counter.js";
import Greeting from "./components/Greeting.js";
import Hide from "./components/Hide.js";
import FontSize from "./components/FontSize.js";
import TextAlign from "./components/TextAlign.js";
import Clock from "./components/Clock.js";
import ColorChanger from "./components/ColorChanger";
import RGBSliderWidget from "./components/RgbSlider";

function App() {
  return (
    <div className="Wrapper">
      <div className="sectionOne">
        <Counter />
        <Greeting />
        <Hide />
      </div>
      <div className="sectionTwo">
        <FontSize />
        <TextAlign />
        <Clock />
      </div>
      <div className="sectionThree">
        <ColorChanger />
        <RGBSliderWidget />
      </div>
    </div>
  );
}

export default App;

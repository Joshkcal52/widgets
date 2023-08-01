import "../App.css";
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [showClock, setShowClock] = useState(true);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleToggleClock = () => {
    setShowClock((prevShowClock) => !prevShowClock);
  };

  return (
    <div className="Clock">
      {showClock ? (
        <div>
          <div>Current Time:</div>
          <div>{time.toLocaleTimeString()}</div>
        </div>
      ) : null}
      <button onClick={handleToggleClock}>
        {showClock ? "Unmount" : "Mount"}
      </button>
    </div>
  );
};

export default Clock;

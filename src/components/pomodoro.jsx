import React, { useState, useEffect, useRef } from "react";

const Pomodoro = () => {
  const [seconds, setSeconds] = useState(1500); // 25 minutes
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive && seconds > 0) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  const formatTime = () => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleStartPause = () => {
    if (isActive) {
      clearInterval(intervalRef.current);
    }
    setIsActive(!isActive);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setSeconds(1500);
    setIsActive(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Pomodoro Timer</h2>
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>{formatTime()}</p>
      <button onClick={handleStartPause}>
        {isActive ? "Pause" : "Start"}
      </button>
      <button onClick={handleReset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
};

export default Pomodoro;

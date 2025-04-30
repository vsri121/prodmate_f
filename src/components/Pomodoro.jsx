import React, { useState, useEffect, useRef } from "react";
import "../App.css";

const Pomodoro = () => {
  const [seconds, setSeconds] = useState(1500); // 25 minutes
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef(null);

  // Toggle timer
  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  // Reset timer
  const resetTimer = () => {
    setIsActive(false);
    setSeconds(1500);
    clearTimeout(timerRef.current);
  };

  // Timer countdown effect
  useEffect(() => {
    if (isActive && seconds > 0) {
      timerRef.current = setTimeout(() => setSeconds(prev => prev - 1), 1000);
    }
    return () => clearTimeout(timerRef.current);
  }, [isActive, seconds]);

  // Stop when timer hits 0
  useEffect(() => {
    if (seconds === 0) {
      setIsActive(false);
      alert("Pomodoro completed!");
    }
  }, [seconds]);

  // Format seconds to mm:ss
  const formatTime = s => {
    const m = String(Math.floor(s / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${m}:${sec}`;
  };

  return (
    <div className="PomodoroTimer">
      <h3>Pomodoro Timer</h3>
      <div className="timer-display">{formatTime(seconds)}</div>
      <div className="btn-group">
        <button onClick={toggleTimer} className={isActive ? "pause" : "start"}>
          {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={resetTimer} className="reset">Reset</button>
      </div>
    </div>
  );
};

export default Pomodoro;

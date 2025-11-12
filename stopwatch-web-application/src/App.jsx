import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // our custom styles

// Convert milliseconds into mm:ss:ms
function formatTime(time) {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const ms = Math.floor((time % 1000) / 10);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}.${String(ms).padStart(2, "0")}`;
}

export default function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const timerRef = useRef(null);

  // Start stopwatch
  const start = () => {
    if (running) return;
    setRunning(true);
    const startTime = Date.now() - time;
    timerRef.current = setInterval(() => {
      setTime(Date.now() - startTime);
    }, 10);
  };

  // Pause stopwatch
  const pause = () => {
    clearInterval(timerRef.current);
    setRunning(false);
  };

  // Reset stopwatch
  const reset = () => {
    clearInterval(timerRef.current);
    setRunning(false);
    setTime(0);
    setLaps([]);
  };

  // Record a lap
  const recordLap = () => {
    if (running) setLaps([...laps, time]);
  };

  return (
    <div className="app-wrapper">
      <div className="stopwatch-card shadow-lg p-4 rounded text-center bg-white">
        <h2 className="fw-bold mb-3">🕒 React Stopwatch</h2>

        {/* Time Display */}
        <h1 className="display-3 fw-bold time-display mb-3">
          {formatTime(time)}
        </h1>

        {/* Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {!running ? (
            <button className="btn btn-success px-4" onClick={start}>
              Start
            </button>
          ) : (
            <button className="btn btn-danger px-4" onClick={pause}>
              Pause
            </button>
          )}
          <button
            className="btn btn-primary px-4"
            onClick={recordLap}
            disabled={!running}
          >
            Lap
          </button>
          <button className="btn btn-secondary px-4" onClick={reset}>
            Reset
          </button>
        </div>

        {/* Laps List */}
        <div className="laps-container text-start">
          <h5 className="mb-3">Laps</h5>
          {laps.length === 0 && (
            <p className="text-muted small">No laps recorded yet.</p>
          )}
          <ul className="list-group">
            {laps.map((lap, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>Lap {index + 1}</span>
                <strong>{formatTime(lap)}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

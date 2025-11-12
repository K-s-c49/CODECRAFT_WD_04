import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Simple time format function: converts milliseconds to mm:ss
function formatTime(time) {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const ms = Math.floor((time % 1000) / 10);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(ms).padStart(2, '0')}`;
}

export default function App() {
  // Stopwatch states
  const [time, setTime] = useState(0); // elapsed time
  const [running, setRunning] = useState(false); // whether stopwatch is running
  const [laps, setLaps] = useState([]); // store laps
  const timerRef = useRef(null); // store interval id

  // Start the stopwatch
  const start = () => {
    if (running) return; // avoid double start
    setRunning(true);
    const startTime = Date.now() - time; // resume from where it stopped
    timerRef.current = setInterval(() => {
      setTime(Date.now() - startTime);
    }, 10); // update every 10ms
  };

  // Pause the stopwatch
  const pause = () => {
    clearInterval(timerRef.current);
    setRunning(false);
  };

  // Reset everything
  const reset = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setLaps([]);
    setRunning(false);
  };

  // Record a lap time
  const recordLap = () => {
    if (!running) return;
    setLaps([...laps, time]);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm p-4 text-center">
            <h2 className="mb-3">Stopwatch By Build With React + Bootstrap</h2>

            {/* Display time */}
            <h1 className="display-4 fw-bold">{formatTime(time)}</h1>

            {/* Buttons (responsive & simple) */}
            <div className="d-flex flex-wrap justify-content-center gap-2 my-3">
              {!running ? (
                <button className="btn btn-success px-4" onClick={start}>Start</button>
              ) : (
                <button className="btn btn-danger px-4" onClick={pause}>Pause</button>
              )}
              <button className="btn btn-primary px-4" onClick={recordLap} disabled={!running}>Lap</button>
              <button className="btn btn-secondary px-4" onClick={reset}>Reset</button>
            </div>

            {/* Lap list */}
            <div className="text-start mt-4">
              <h5>Laps</h5>
              {laps.length === 0 && <p className="text-muted small">No laps yet</p>}
              <ul className="list-group">
                {laps.map((lap, i) => (
                  <li key={i} className="list-group-item d-flex justify-content-between">
                    <span>Lap {i + 1}</span>
                    <strong>{formatTime(lap)}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

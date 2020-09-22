import React from "react";

const Clock = (props) => {
  // HANDLERS
  const handleReset = () => {
    props.setRunning(false);
    props.setSessionTime(25);
    props.setBreakTime(5);
  };

  const handleStartStop = () => {
    if (props.running === false) {
      props.setRunning(true);
      props.setDisableControls(true);
    } else if (props.running === true) {
      props.setRunning(false);
    }
  };

  // RENDER
  return (
    <>
      <div className="timer">
        <h2 id="timer-label">{props.timerType}</h2>
        <p id="time-left">{props.timer}</p>
      </div>
      <div className="controls">
        <button id="start_stop" onClick={handleStartStop}>
          {props.running === false ? (
            <i className="fas fa-play"></i>
          ) : (
            <i className="fas fa-pause"></i>
          )}
        </button>
        <button id="reset" onClick={handleReset}>
          <i className="fas fa-redo"></i>
        </button>
      </div>
    </>
  );
};

export default Clock;

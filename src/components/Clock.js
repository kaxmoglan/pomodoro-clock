import React, { useState } from "react";

const Clock = (props) => {
  // STATE
  const [loop, setLoop] = useState();

  // HANDLERS
  const handleReset = () => {
    props.setRunning(false);
    props.setSessionTime(25);
    props.setBreakTime(5);
    props.setClock(1500);
  };

  const handleStartStop = () => {
    if (props.running === false) {
      props.setRunning(true);
      props.setDisableControls(true);
      setLoop(
        setInterval(() => {
          props.setClock((x) => x - 1);
        }, 1000)
      );
    } else if (props.running === true) {
      props.setRunning(false);
      setLoop(clearInterval(loop));
    }
  };

  const timeConverter = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${minutes}:${seconds}`;
  };

  // RENDER
  return (
    <>
      <div className="timer">
        <h2 id="timer-label">{props.timerType}</h2>
        <p id="time-left">{timeConverter(props.clock)}</p>
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

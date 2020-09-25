import React, { useEffect } from "react";

const Clock = (props) => {
  // STATE
  const {
    sessionTime,
    setSessionTime,
    breakTime,
    setBreakTime,
    timerType,
    setTimerType,
    running,
    setRunning,
    setDisableControls,
    clock,
    setClock,
    loop,
    setLoop,
  } = props;

  // HANDLERS
  const handleReset = () => {
    setLoop(clearInterval(loop));
    setRunning(false);
    setSessionTime(25);
    setBreakTime(5);
    setClock(1500);
    setTimerType("Session");
    setDisableControls(false);
    const beep = document.querySelector("#beep");
    beep.pause();
    beep.currentTime = 0;
  };

  const handleStartStop = () => {
    if (running === false) {
      setRunning(true);
      setDisableControls(true);
      setLoop(
        setInterval(() => {
          setClock((x) => x - 1);
        }, 1000)
      );
    } else if (running === true) {
      setRunning(false);
      setDisableControls(false);
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

  // USE EFFECTS
  useEffect(() => {
    if (clock === 0 && timerType === "Session" && running) {
      setTimerType("Break");
      setClock(breakTime * 60);
    } else if (clock === 0 && timerType === "Break" && running) {
      setTimerType("Session");
      setClock(sessionTime * 60);
    }
  }, [clock]);

  useEffect(() => {
    const beep = document.querySelector("#beep");
    if (clock === 0) {
      beep.play();
      beep.addEventListener("ended", () => (beep.currentTime = 0));
    }
  }, [clock]);

  // RENDER
  return (
    <>
      <div className="clock">
        <div className="header">
          <i className="fab fa-react"></i>
          <h2 id="timer-label">{timerType}</h2>
        </div>

        <p id="time-left">{timeConverter(clock)}</p>
      </div>
      <div className="controls">
        <button id="start_stop" onClick={handleStartStop}>
          {running === false ? (
            <i className="fas fa-play"></i>
          ) : (
            <i className="fas fa-pause"></i>
          )}
        </button>
        <button id="reset" onClick={handleReset}>
          <i className="fas fa-redo"></i>
        </button>
      </div>
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </>
  );
};

export default Clock;

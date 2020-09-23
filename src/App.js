import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Clock from "./components/Clock";

function App() {
  // DATA
  const timers = {
    sessionTimer: {
      label: {
        id: "session-label",
        title: "Session Length",
      },
      control1: {
        id: "session-decrement",
      },
      control2: {
        id: "session-increment",
      },
      display: {
        id: "session-length",
      },
    },
    breakTimer: {
      label: {
        id: "break-label",
        title: "Break Length",
      },
      control1: {
        id: "break-decrement",
      },
      control2: {
        id: "break-increment",
      },
      display: {
        id: "break-length",
      },
    },
  };

  // STATE
  const [sessionTime, setSessionTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [timerType, setTimerType] = useState("Session");
  const [running, setRunning] = useState(false);
  const [clock, setClock] = useState(1500);
  const [disableControls, setDisableControls] = useState(false);
  const [timer, setTimer] = useState("25:00");

  // USE EFFECTS
  // set clock in seconds as session time changes
  useEffect(() => {
    setClock(sessionTime * 60);
  }, [sessionTime]);

  // set clock in seconds to relevant timer when timer type changes
  useEffect(() => {
    if (timerType === "Session") {
      setClock(sessionTime * 60);
    } else if (timerType === "Break") {
      setClock(breakTime * 60);
    }
  }, [timerType]);

  // RENDER
  return (
    <>
      <Timer
        time={sessionTime}
        setTime={setSessionTime}
        timer={timers.sessionTimer}
        disableControls={disableControls}
      />
      <Timer
        time={breakTime}
        setTime={setBreakTime}
        timer={timers.breakTimer}
        disableControls={disableControls}
        setDisableControls={setDisableControls}
      />
      <Clock
        sessionTime={sessionTime}
        setSessionTime={setSessionTime}
        breakTime={breakTime}
        setBreakTime={setBreakTime}
        timerType={timerType}
        setTimerType={setTimerType}
        running={running}
        setRunning={setRunning}
        disableControls={disableControls}
        setDisableControls={setDisableControls}
        timer={timer}
        setTimer={setTimer}
        clock={clock}
        setClock={setClock}
      />
    </>
  );
}

export default App;

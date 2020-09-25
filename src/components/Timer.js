import React, { useEffect } from "react";

const Timer = (props) => {
  const { time, setTime, disableControls, timer } = props;

  // HANDLERS
  const handleIncrement = () => {
    if (time < 60) {
      setTime((x) => x + 1);
    }
  };

  const handleDecrement = () => {
    if (time > 1) {
      setTime((x) => x - 1);
    }
  };

  return (
    <div className={`settings disableControls_${disableControls}`}>
      <div className="length-control">
        <h2 id={timer.label.id}>{timer.label.title}</h2>
        <button id={timer.control1.id} onClick={handleDecrement}>
          <i className="fas fa-minus"></i>
        </button>
        <div id={timer.display.id}>{props.time}</div>
        <button id={timer.control2.id} onClick={handleIncrement}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Timer;

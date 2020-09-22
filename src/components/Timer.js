import React from "react";

const Timer = (props) => {
  const timer = props.timer;
  // HANDLERS
  const handleIncrement = () => {
    if (props.time < 60) {
      props.setTime(props.time + 1);
    }
  };

  const handleDecrement = () => {
    if (props.time > 1) {
      props.setTime(props.time - 1);
    }
  };

  return (
    <div className={`settings disableControls_${props.disableControls}`}>
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

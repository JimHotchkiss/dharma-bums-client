import React from "react";
import "./TimerContainer.css";
class TimerContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="Timer-container">
        <div className="Timer-title">
          <h3>Timer Container</h3>
        </div>
        <div className="Button-wrapper">
          <div className="Start-div">
            <button className="Start-button">
              <p>Start</p>
            </button>
          </div>
          <div className="Pause-div">
            <button className="Pause-button">
              <p>Pause</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default TimerContainer;

import React from "react";
import "./TimerContainer.css";
class TimerContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.meditation.duration);
    return (
      <div className="Timer-container">
        <div className="Timer-title">
          <h2>Meditation Clock</h2>

          <div className="Timer-div">
            <p className="Timer-font">{this.props.meditation.duration}</p>
          </div>
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

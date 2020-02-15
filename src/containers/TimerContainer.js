import React from "react";
import "./TimerContainer.css";
class TimerContainer extends React.Component {
  constructor(props) {
    super(props);
    const time = props.meditation.duration;
    this.state = { meditationLength: time };
  }
  render() {
    const handleStart = () => {
      const interval = setInterval(() => {
        this.setState({ meditationLength: this.state.meditationLength - 1 });
        if (this.state.meditationLength === 0) {
          clearInterval(interval);
        }
      }, 1000);
    };
    let timer = this.state.meditationLength;
    const complete = <p>Meditation Complete</p>;
    const handlePause = () => {
      // console.log("pause");
    };
    const meditationComplete = <p>Mediation Complete</p>;
    return (
      <div className="Timer-container">
        <div className="Timer-title">
          <h2>Meditation Clock</h2>

          <div className="Timer-div">{timer === 0 ? complete : timer}</div>
        </div>
        <div className="Button-wrapper">
          <div className="Start-div">
            <button onClick={handleStart} className="Start-button">
              <p>Start</p>
            </button>
          </div>
          <div className="Pause-div">
            <button onClick={handlePause} className="Pause-button">
              <p>Pause</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default TimerContainer;

import React from "react";
import "./TimerContainer.css";
import meditationChime from "../sounds/meditationBell.mp3";
class TimerContainer extends React.Component {
  constructor(props) {
    super(props);
    const time = props.meditation.duration;
    this.state = {
      meditationLength: time,
      meditationStop: false
    };
  }
  render() {
    const audio = new Audio(meditationChime);

    const hideButton = () => {
      this.setState({ meditationStop: true });
    };

    const handleStart = () => {
      audio.currentTime = 0;
      audio.play();
      hideButton();
      const interval = setInterval(() => {
        this.setState({ meditationLength: this.state.meditationLength - 1 });
        if (this.state.meditationLength === 0) {
          clearInterval(interval);
          audio.currentTime = 0;
          audio.play();
        }
      }, 1000);
    };
    const timer = this.state.meditationLength;
    const complete = <p>Meditation Complete</p>;

    return (
      <div className="Timer-container">
        <div className="Timer-title">
          <h2>Meditation Clock</h2>
          <div className="Timer-div">{timer === 0 ? complete : timer}</div>
        </div>
        <div className="Button-wrapper">
          <div className="Start-div">
            <button
              style={{ display: this.state.meditationStop ? "none" : null }}
              onClick={handleStart}
              className="Start-button"
            >
              <p>Begin</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default TimerContainer;

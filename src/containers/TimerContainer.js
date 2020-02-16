import React from "react";
import "./TimerContainer.css";
import meditationChime from "../sounds/meditationBell.mp3";
class TimerContainer extends React.Component {
  constructor(props) {
    super(props);
    const time = props.meditation.duration;
    this.state = { meditationLength: time };
  }
  render() {
    const audio = new Audio(meditationChime);

    const handleStart = () => {
      audio.play();
      const interval = setInterval(() => {
        this.setState({ meditationLength: this.state.meditationLength - 1 });
        if (this.state.meditationLength === 0) {
          clearInterval(interval);
          audio.play();
        }
      }, 1000);
    };
    let timer = this.state.meditationLength;
    const complete = <p>Meditation Complete</p>;

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
              <p>Begin</p>
            </button>
            <audio className="Chime" src="../sounds/meditationBell.mp3"></audio>
          </div>
        </div>
      </div>
    );
  }
}
export default TimerContainer;

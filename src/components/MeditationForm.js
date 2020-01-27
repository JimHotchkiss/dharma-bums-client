import React from "react";
import { Link } from "react-router-dom";

class MeditationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: "", duration: "5 minutes", organizer: "" };
  }

  handleTheme = event => {
    this.setState({ theme: event.target.value });
  };

  handleDuration = event => {
    this.setState({ duration: event.target.value });
  };

  handleOrganizer = event => {
    this.setState({ organizer: event.target.value });
  };

  handleSubmit = event => {
    console.log("this is in handleSubmit", this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        Meditation Form
        <div>
          <Link to={`/meditations`}>Back to Meditations</Link>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Theme:
            <input
              type="text"
              value={this.state.theme}
              onChange={this.handleTheme}
            />
          </label>
          <label>
            Duration:
            <select value={this.state.duration} onChange={this.handleDuration}>
              <option value="5 minutes">5</option>
              <option value="10 minutes">10</option>
              <option value="15 minutes">15</option>
              <option value="20 minutes">20</option>
            </select>
          </label>
          <label>
            Organizer:
            <input
              type="text"
              value={this.state.organizer}
              onChange={this.handleOrganizer}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.theme}
        {this.state.organizer}
        {this.state.duration}
      </div>
    );
  }
}
export default MeditationForm;

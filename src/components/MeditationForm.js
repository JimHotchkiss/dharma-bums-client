import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MeditationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: "", duration: "20", organizer: "" };
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
    event.preventDefault();
    this.props.addMeditation(this.state);
    this.setState({
      theme: "",
      organizer: "",
      duration: "20"
    });
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
              placeholder="Theme"
              value={this.state.theme}
              onChange={this.handleTheme}
            />
          </label>
          <label>
            Duration:
            <select value={this.state.duration} onChange={this.handleDuration}>
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
              <option value="55">55</option>
              <option value="60">60</option>
            </select>
          </label>
          <label>
            Organizer:
            <input
              type="text"
              placeholder="Organizer"
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

const mapDispatchToProps = dispatch => {
  return {
    addMeditation: formData =>
      dispatch({ type: "ADD_MEDITATION", payload: formData })
  };
};
export default connect(null, mapDispatchToProps)(MeditationForm);

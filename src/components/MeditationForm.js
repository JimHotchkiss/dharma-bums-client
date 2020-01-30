import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addMeditation } from "../actions/addMeditation";

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
    this.props.history.push("/meditations");
  };

  render() {
    return (
      <div>
        Meditation Form
        <div>
          <Link meditations={this.props.meditations} to={`/meditations`}>
            Back to Meditations
          </Link>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Theme:
            <input
              type="text"
              name="theme"
              placeholder="Theme"
              value={this.state.theme}
              onChange={this.handleTheme}
            />
          </label>
          <label>
            Duration:
            <select
              value={this.state.duration}
              onChange={this.handleDuration}
              name="duration"
            >
              <option type="number" value="0">
                0
              </option>
              <option type="number" value="5">
                5
              </option>
              <option type="number" value="10">
                10
              </option>
              <option type="number" value="15">
                15
              </option>
              <option type="number" value="20">
                20
              </option>
              <option type="number" value="25">
                25
              </option>
              <option type="number" value="30">
                30
              </option>
              <option type="number" value="35">
                35
              </option>
              <option type="number" value="40">
                40
              </option>
              <option type="number" value="45">
                45
              </option>
              <option type="number" value="50">
                50
              </option>
              <option type="number" value="55">
                55
              </option>
              <option type="number" value="60">
                60
              </option>
            </select>
          </label>
          <label>
            Organizer:
            <input
              type="text"
              name="organizer"
              placeholder="Organizer"
              value={this.state.organizer}
              onChange={this.handleOrganizer}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { meditations: state.meditations };
};

export default connect(mapStateToProps, { addMeditation })(MeditationForm);

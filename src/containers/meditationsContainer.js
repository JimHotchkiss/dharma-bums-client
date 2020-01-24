import React from "react";
import "./Meditation.css";
import { connect } from "react-redux";
import { fetchMeditations } from "../actions/fetchMeditations";

class MeditationsContainer extends React.Component {
  handleOnClick = () => {
    this.props.fetchMeditations();
  };
  render() {
    console.log(this.props.meditations);
    const meditationList = this.props.meditations.map(meditation => (
      <li key={meditation.id}>
        {meditation.attributes.theme} {meditation.attributes.duration}
      </li>
    ));
    return (
      <div className="Meditation_background">
        <button onClick={this.handleOnClick}>Meditations</button>
        {meditationList}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { fetchMeditations: () => dispatch(fetchMeditations()) };
}

function mapStateToProps(state) {
  return { meditations: state.meditations };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeditationsContainer);

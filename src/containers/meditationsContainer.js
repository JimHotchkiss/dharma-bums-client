import React from "react";
import "./Meditation.css";
import { connect } from "react-redux";
import { fetchMeditations } from "../actions/fetchMeditations";
import Meditations from "../components/Meditations";
import { Route } from "react-router-dom";

class MeditationsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchMeditations();
  }
  render() {
    const meditationList = this.props.meditations.map(meditation => (
      <li key={meditation.id}>
        <a href="#">
          {meditation.attributes.theme} {meditation.attributes.duration}
        </a>
      </li>
    ));
    return (
      <div className="Meditation_background">
        <Route path="/meditations" component={Meditations} />
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

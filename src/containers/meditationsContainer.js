import React from "react";
import "./Meditation.css";
import { connect } from "react-redux";
import { fetchMeditations } from "../actions/fetchMeditations";
import Meditations from "../components/Meditations";
import { Route, Switch } from "react-router-dom";
import Meditation from "../components/Meditation";

class MeditationsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchMeditations();
  }
  render() {
    return (
      <div className="Meditation_background">
        <Route
          path="/meditations"
          render={routerProps => (
            <Meditations
              {...routerProps}
              meditations={this.props.meditations}
            />
          )}
        />
        <Route
          path="/meditations/:id"
          render={routerProps => (
            <Meditation {...routerProps} meditations={this.props.meditations} />
          )}
        />
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

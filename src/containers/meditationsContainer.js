import React from "react";
import "./Meditations.css";
import { connect } from "react-redux";
import { fetchMeditations } from "../actions/fetchMeditations";
import Meditations from "../components/Meditations";
import { Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Meditation from "../components/Meditation";
import MeditationForm from "../components/MeditationForm";

class MeditationsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchMeditations();
  }
  render() {
    return (
      <div className="Meditation_background">
        <NavBar meditations={this.props.meditations} />
        <Switch>
          <Route
            exact
            path="/meditations/new"
            render={routerProps => <MeditationForm {...routerProps} />}
          />
          <Route
            exact
            path="/meditations"
            render={routerProps => (
              <Meditations
                {...routerProps}
                completed={this.props.completed}
                meditations={this.props.meditations}
              />
            )}
          />
          <Route
            path="/meditations/:id"
            render={routerProps => (
              <Meditation
                {...routerProps}
                completed={this.props.completed}
                meditations={this.props.meditations}
              />
            )}
          />
        </Switch>
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

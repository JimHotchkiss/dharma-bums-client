import React from "react";
import "./Meditation.css";
import { connect } from "react-redux";
import { fetchMeditations } from "../actions/fetchMeditations";

class MeditationsContainer extends React.Component {
  // handleOnClick = () => {
  //   this.props.fetchMeditations();
  // };

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
      // // <div className="Meditation_background">
      // //   <button onClick={this.handleOnClick}>Meditations</button>

      // </div>
      <div className="Meditation_background">{meditationList}</div>
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

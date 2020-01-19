import React from "react";
import MeditationsContainer from "./containers/MeditationsContainer";

class App extends React.Component {
  // componentDidMount() {
  //   fetch("http://localhost:3000/api/v1/meditations/1/comments/1")
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }
  render() {
    return <MeditationsContainer />;
  }
}

export default App;

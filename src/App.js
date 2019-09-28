import React from "react";
import Campaign from "./components/Campaign";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
    <div className="App">
      <Campaign  />
    </div>
    )
  }
}


export default App;

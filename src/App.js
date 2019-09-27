import React from "react";
import Campaign from "./components/Campaign";
import CampaignData from "./Fixtures/CampaignData";
import "./App.scss";


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

import React from "react";
import CampaignTable from "./CampaignTable";
import CampaignData from "../../Fixtures/CampaignData";
export default class Campaign extends React.Component {
  render() {
    return (
      <div>
        <h1> HELLO Motherfuckers</h1>
        <CampaignTable data={CampaignData.campaign} />
      </div>
    );
  }
}

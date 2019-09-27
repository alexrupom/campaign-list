import React from "react";
import CampaignTable from "./CampaignTable";

export default class Campaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.data
    };
  }

  searchByName = event => {
    const incoming = event.target.value;
    const newList = [...this.props.data];
    const filtered = newList.filter(item =>
      item.name.toLowerCase().includes(incoming.toLowerCase())
    );
    if (incoming.length > 0) {
      this.setState({
        list: filtered
      });
    } else {
      this.setState({
        list: this.props.data
      });
    }
  };

  render() {
    window.AlertTest= campaignInput => ( alert(campaignInput))
    window.AddCampaigns = campaignInput => {
      if (campaignInput.length > 0) {
        this.setState({
          list: campaignInput
        })
      }
    };
    return (
      <div>
        <h1> HELLO Motherfuckers</h1>
        <div>
          <input placeholder="Star Date" />
          <input placeholder="End Date" />
          <input
            placeholder=" Search by Name"
            onChange={value => this.searchByName(value)}
          />
        </div>
        <CampaignTable data={this.state.list} />
      </div>
    );
  }
}

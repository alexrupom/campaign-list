import React from "react";
import CampaignTable from "./CampaignTable";
import DatePicker from "react-datepicker";
import moment from "moment";
import search from "../../magnifier-tool.svg";

export default class Campaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
      inputData: null,
      startDate: null,
      endDate: null
    };
  }

  updateConsoleData = data => {
    if (data.length > 0) {
      this.setState({
        list: data,
        inputData: data
      });
    }
  };

  listUpdate = (input, filtered) => {
    if (input) {
      this.setState({
        list: filtered
      });
    } else {
      this.setState({
        list: this.state.inputData
      });
    }
  };

  searchByName = event => {
    if (this.state.inputData) {
      const name = event.target.value;
      const newList = [...this.state.inputData];
      const filtered = newList.filter(item =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );
      this.listUpdate(name, filtered);
    }
  };

  searchByStartDate = () => {
    if (this.state.inputData && this.state.startDate) {
      let newList = this.state.inputData;
      if (this.state.endDate) {
        newList = this.state.list;
      }
      const selectedDate = moment(this.state.startDate);

      const filtered = newList.filter(item =>
        selectedDate.isBefore(item.startDate)
      );
      this.listUpdate(this.state.startDate, filtered);
    }
  };

  searchByEndDate = () => {
    if (this.state.inputData && this.state.endDate) {
      let newList = this.state.inputData;

      if (this.state.startDate) {
        newList = this.state.list;
      }
      const selectedDate = moment(this.state.endtDate);
      const filtered = newList.filter(item =>
        selectedDate.isAfter(item.endDate)
      );
      this.listUpdate(this.state.endDate, filtered);
    }
  };

  handleStartDate = date => {
    this.setState(
      {
        startDate: date
      },
      () => this.searchByStartDate()
    );
  };

  handleEndDate = date => {
    this.setState(
      {
        endDate: date
      },
      () => this.searchByEndDate()
    );
  };

  render() {
    window.AddCampaigns = campaignInput =>
      this.updateConsoleData(campaignInput);
    return (
      <div>
        <div className="campaign">
          <div>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleStartDate}
              maxDate={this.state.endDate}
              placeholderText="Start Date"
              className="campaign__input"
            />
            <DatePicker
              selected={this.state.endDate}
              minDate={this.state.startDate}
              onChange={this.handleEndDate}
              placeholderText="End Date"
              className="campaign__input"
            />
          </div>

          <div>
            <input
              placeholder=" Search by Name"
              onChange={value => this.searchByName(value)}
              name="search"
              type="text"
              className="campaign__input"
            />
            <div className="campaign__logo">
              <img src={search} alt="Search Logo" />
            </div>
          </div>
        </div>
        <CampaignTable data={this.state.list} />
      </div>
    );
  }
}

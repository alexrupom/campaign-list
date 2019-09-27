import React from "react";
import Status from "./Status";
import PropTypes from "prop-types";

const checkStatus = (startDate, endDate) => {
  let status = false;
  const currentDate = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  if (start < currentDate && currentDate < end) {
    status = true;
  }

  return status;
};

const CampaignTable = props => {
  console.log(props.data)
  let table;

  if (props.data.length > 0) {
    table = props.data.map(item => (
      <tr key={item.id}>
        <th>{item.name}</th>
        <th>{item.startDate}</th>
        <th>{item.endDate}</th>
        <th>
          <Status active={checkStatus(item.startDate, item.endDate)} />
        </th>
        <th>{item.budget}</th>
      </tr>
    ));
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Active</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </div>
  );
};

CampaignTable.defaultProps = {
  data: []
};

export default CampaignTable;

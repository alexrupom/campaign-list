import React from "react";
import Status from "./Status";
import PropTypes from "prop-types";
import {formatSI} from 'format-si-prefix';

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
  let table;
  if (props.data && props.data.length > 0) {
    table = props.data.map(item => (
      <tr key={item.id}>
        <th>{item.name}</th>
        <th>{item.startDate}</th>
        <th>{item.endDate}</th>
        <th>
          <Status active={checkStatus(item.startDate, item.endDate)} />
        </th>
        <th>{formatSI(item.budget)} USD</th>
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

CampaignTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    budget: PropTypes.number.isRequired,
  }))
}

export default CampaignTable;

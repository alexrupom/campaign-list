import React from "react";

const CampaignTable = props => {
  return (
    <div>
      <div>
        <input placeholder="Star Date"/>
        <input placeholder="End Date"/>
        <input placeholder=" Search by Name"/>
      </div>
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
          <tbody>
            {
              props.data.map( item => (
                <tr>
                    <th>{item.name}</th>
                    <th>{item.startDate}</th>
                    <th>{item.endDate}</th>
                    <th>Nothing</th>
                    <th>{item.budget}</th>
                  </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampaignTable;

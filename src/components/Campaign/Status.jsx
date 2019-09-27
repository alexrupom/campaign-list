import React from "react";
import classNames from "classnames";

const Status = props => {
  return (
    <div className="status">
      <div
        className={classNames("status__dot", {
          "status__dot--active": props.active
        })}
      />
      <div className="status__label">
        {props.active ? "Active" : "Inactive"}
      </div>
    </div>
  );
};

export default Status;

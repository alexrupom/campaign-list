import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

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

Status.defaultProps = {
  active: false
};

Status.propTypes = {
  active: PropTypes.bool
};

export default Status;

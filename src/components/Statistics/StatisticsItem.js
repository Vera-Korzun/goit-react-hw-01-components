import React from "react";
import PropTypes from "prop-types";
import randomColor from "../colors/colors.js";

const StatisticsItem = ({ label, percentage }) => {
  return (
    <li className="item" style={{ backgroundColor: `${randomColor()}` }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

export default StatisticsItem;

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

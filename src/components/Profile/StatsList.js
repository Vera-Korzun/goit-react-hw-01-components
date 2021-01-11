import React from "react";
import PropTypes from "prop-types";
import StatsListItem from "./StatsListItem";

const StatsList = ({ stats }) => {
  return (
    <ul className="stats">
      <StatsListItem {...stats} />
    </ul>
  );
};

export default StatsList;

StatsList.propTypes = {
  stats: PropTypes.object,
};

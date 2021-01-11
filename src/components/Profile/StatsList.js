import React from "react";
import StatsListItem from "./StatsListItem";
import PropTypes from "prop-types";

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

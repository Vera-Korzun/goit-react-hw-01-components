import React from "react";
import StatsListItem from "./StatsListItem";
import PropTypes from "prop-types";

const StatsList = ({ stats }) => {
  return (
    <ul class="stats">
      <StatsListItem {...stats} />
    </ul>
  );
};

export default StatsList;

StatsList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.object),
};

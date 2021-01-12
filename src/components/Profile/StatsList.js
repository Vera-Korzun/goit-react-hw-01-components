import React from "react";
import PropTypes from "prop-types";
import StatsListItem from "./StatsListItem";
import styles from "./Profile.module.css";

const StatsList = ({ stats }) => {
  return (
    <ul className={styles.stats}>
      <StatsListItem {...stats} />
    </ul>
  );
};

export default StatsList;

StatsList.propTypes = {
  stats: PropTypes.object,
};

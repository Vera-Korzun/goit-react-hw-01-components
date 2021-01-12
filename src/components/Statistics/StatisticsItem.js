import React from "react";
import PropTypes from "prop-types";
import randomColor from "../colors/colors.js";
import styles from "./Statistics.module.css";

const StatisticsItem = ({ label, percentage }) => {
  return (
    <li className={styles.item} style={{ backgroundColor: `${randomColor()}` }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticsItem;

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

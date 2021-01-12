import React from "react";
import PropTypes from "prop-types";
import StatisticsItem from "./StatisticsItem";
import styles from "./Statistics.module.css";

const Statistics = ({ stats, title = "" }) => {
  return (
    <section className={styles.statistics}>
      {title === "" ? null : <h2 className={styles.title}>Upload stats</h2>}

      <ul className={styles.statsList}>
        {stats.map((stat) => (
          <StatisticsItem {...stat} key={stat.id} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

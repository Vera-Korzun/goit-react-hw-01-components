import React from "react";
import PropTypes from "prop-types";
import StatisticsItem from "./StatisticsItem";

const Statistics = ({ stats, title = "" }) => {
  return (
    <section className="statistics">
      {title === "" ? null : <h2 className="title">Upload stats</h2>}

      <ul className="list stat-list">
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

import React from "react";
import PropTypes from "prop-types";
import StatisticsItem from "./StatisticsItem";
import Wrapper from "./StatisticsStyles";

const Statistics = ({ stats, title = "" }) => {
  return (
    <Wrapper>
      <section className="statistics">
        {title && <h2 className="title">Upload stats</h2>}

        <ul className="list stat-list">
          {stats.map((stat) => (
            <StatisticsItem {...stat} key={stat.id} />
          ))}
        </ul>
      </section>
    </Wrapper>
  );
};

export default Statistics;

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

const StatsListItem = ({ followers, views, likes }) => {
  return (
    <>
      <li className={styles.statsitem}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{followers}</span>
      </li>
      <li className={styles.statsitem}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{views}</span>
      </li>
      <li className={styles.statsitem}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{likes}</span>
      </li>
    </>
  );
};

export default StatsListItem;

StatsListItem.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

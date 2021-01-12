import React from "react";
import PropTypes from "prop-types";
import StatsList from "./StatsList";
import styles from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={props.avatar}
          alt="Аватар пользователя"
          className={styles.avatar}
        />
        <p className={styles.name}>{props.name}</p>
        <p className={styles.tag}>@{props.tag}</p>
        <p className={styles.location}>{props.location}</p>
      </div>

      <StatsList stats={props.stats} />
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  props: PropTypes.object,
};

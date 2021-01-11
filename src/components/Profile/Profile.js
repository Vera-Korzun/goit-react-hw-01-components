import React from "react";
import PropTypes from "prop-types";
import StatsList from "./StatsList";

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={props.avatar}
          alt="Аватар пользователя"
          className="avatar"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
          }}
        />
        <p className="name">{props.name}</p>
        <p className="tag">@{props.tag}</p>
        <p className="location">{props.location}</p>
      </div>

      <StatsList stats={props.stats} />
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  props: PropTypes.object,
};

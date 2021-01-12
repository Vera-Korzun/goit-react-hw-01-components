import React from "react";
import PropTypes from "prop-types";
import StatsList from "./StatsList";
import Wrapper from "./ProfileStyles.js";

const Profile = (props) => {
  return (
    <Wrapper>
      <div className="profile">
        <div className="description">
          <img
            src={props.avatar}
            alt="Аватар пользователя"
            className="avatar"
          />
          <p className="name">{props.name}</p>
          <p className="tag">@{props.tag}</p>
          <p className="location">{props.location}</p>
        </div>

        <StatsList stats={props.stats} />
      </div>
    </Wrapper>
  );
};

export default Profile;

Profile.propTypes = {
  props: PropTypes.object,
};

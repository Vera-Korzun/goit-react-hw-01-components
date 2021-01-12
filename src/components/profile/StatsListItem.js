import React from "react";
import PropTypes from "prop-types";

const StatsListItem = ({ followers, views, likes }) => {
  return (
    <>
      <li className="statsitem">
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li className="statsitem">
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li className="statsitem">
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
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

import React from "react";
import PropTypes from "prop-types";

const StatsListItem = ({ followers, views, likes }) => {
  return (
    <>
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{likes}</span>
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

import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import Wrapper from "./FriendLIstStyles";

const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      <ul className="list friend-list">
        {friends.map((friend) => (
          <FriendListItem {...friend} key={friend.id} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

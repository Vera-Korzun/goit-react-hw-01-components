import styled from "styled-components";

const Wrapper = styled.ul`
  .friend-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .item {
    display: flex;
    align-items: center;
    border: 1px solid #a9a9a9;
    border-radius: 6px;
    box-shadow: 4px 5px 15px 5px rgba(0, 0, 0, 0.57);
    padding: 15px 20px;
    width: 250px;
    background-color: #fff;
  }
  .item:not(:last-child) {
    margin-bottom: 15px;
  }
  .status {
    margin-right: 15px;
  }
  .avatar {
    margin-right: 15px;
  }
  .name {
    font-size: 25px;
    font-weight: 500;
  }
`;

export default Wrapper;
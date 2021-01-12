import styled from "styled-components";

const Wrapper = styled.div`
  .profile {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    width: 300px;
    background-color: #ffffff;
    border-radius: 6px;
    box-shadow: 4px 5px 15px 5px rgba(0, 0, 0, 0.57);
    overflow: hidden;
    margin: 20px auto;
  }
  .description {
    justify-content: center;
    border: 1;
  }
  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 25px auto;
  }
  .name {
    font-size: 20px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 10px;
  }
  .tag {
    font-size: 15px;
    color: #a9a9a9;
    margin-bottom: 10px;
  }
  .location {
    font-size: 15px;
    color: #a9a9a9;
    margin-bottom: 15px;
  }
  .stats {
    display: flex;
    flex-direction: row;
  }
  .statsitem {
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    width: calc(100% / 3);
    border-top: 1px solid #a9a9a9;
    background-color: #f0ffff;
  }
  .statsitem:not(:last-child) {
    border-right: 1px solid #a9a9a9;
  }
  .label {
    font-size: 12px;
    color: #a9a9a9;
  }
  .quantity {
    font-size: 15px;
    font-weight: 500;
    color: #000000;
  }
`;

export default Wrapper;

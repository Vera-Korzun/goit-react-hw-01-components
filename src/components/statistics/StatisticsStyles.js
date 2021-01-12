import styled from "styled-components";

const Wrapper = styled.section`
  .statistics {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background-color: #fff;
    width: 350px;
    border-radius: 6px;
    overflow: hidden;
    margin: 50px auto;
  }
  .title {
    color: #696969;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 20px auto;
  }
  .stat-list {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .item {
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    width: calc(100% / 5);

    border-left: none;
  }
  .label {
    font-size: 18px;
    color: #fff;
    margin-bottom: 12px;
  }
  .percentage {
    font-size: 20px;
    color: #fff;
  }
`;

export default Wrapper;

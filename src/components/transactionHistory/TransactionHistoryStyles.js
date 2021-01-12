import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px;
  .transaction-history {
    margin: 0 auto;
    border-collapse: collapse;
    box-shadow: 4px 5px 15px 5px rgba(0, 0, 0, 0.57);
  }
  .transaction-history thead {
    background-color: #add8e6;
    color: white;
  }
  .transaction-history th {
    padding: 10px;
    width: 150px;
    font-size: 15px;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
  }
  .transaction-history th:not(:last-child) {
    border-right: 1px solid #ffffff;
  }
  .transaction-history tbody tr {
    background-color: #ffffff;
  }
  .transaction-history tbody tr:nth-child(even) {
    background-color: #fff0f5;
  }
  .transaction-history td {
    padding: 10px;
    width: 150px;
    font-size: 13px;
    font-weight: 400;
    text-align: center;
    color: #808080;
  }
  .transaction-history td:not(:last-child) {
    border-right: 1px solid #dcdcdc;
  }
`;
export default Wrapper;

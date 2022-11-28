import React from 'react';
import styled from 'styled-components';

const YesNoNotGiven = ({ id, index, val0, userAnswer, getUserInput }) => {
  return (
    <Wrapper>
      <div>
        <div>
          <h2 style={{ color: '#32B4C8' }}>Question {index + 1}:</h2>
        </div>
        <div className="question-ynn">
          <select className="iot-question" name={index} value={userAnswer} onChange={getUserInput}>
            <option value="true">YES</option>
            <option value="false">NO</option>
            <option value="notgiven">NOT GIVEN</option>
          </select>
          <h3 style={{ fontSize: '18px', paddingTop: '8px', paddingLeft: '4px' }}>{val0}</h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default YesNoNotGiven;

const Wrapper = styled.div`
  .question-ynn {
    display: flex;
    align-items: center;
    margin-left: 15px;
  }

  .iot-question {
    border-radius: 2px;
    border: 1px solid #aaa;
    margin: 0px 5px;
    outline: none;
    max-width: 130px;
    height: 30px;
  }

  table {
    margin-left: 10px;
    margin-bottom: 14px;
  }

  td {
    font-weight: bold;
  }

  .odd {
    background-color: #38bdf8;
  }

  tbody tr td {
    padding: 5px 2px 5px 20px !important;
  }

  table {
    border: 1px solid #0e7490;
  }
`;

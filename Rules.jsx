import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game?</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>If you get wrong guess then 2 ponts will be deducted</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  background-color: pink;
  padding: 15px;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 35px;
  border-radius: 8px;
  h2 {
    font-size: 25px;
    font-weight: 200;
  }
  .text {
    margin-top: 20px;
  }
`;

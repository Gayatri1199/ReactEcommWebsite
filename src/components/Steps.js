import React from "react";
import styled from "styled-components";

const StepsStyle = styled.div`
 width:49%;
 @media screen and (min-width:768px){
  width:50%;
 }
 @media screen and (min-width:1260px){
  width:20%;
 }
  .step {
    text-align: center;
    
    margin-top:20px;
    @media screen and (min-width:768px){
      min-width:350px;
    }
    @media screen and (min-width:1260px){
      margin-top:0px;
      min-width:unset;
    }

    .image-sec {
      width: 128px;
      height: 128px;
      margin:auto;
    }

    span {
      padding: 5px 15px;
      display: inline-block;
      font-size: 12px;
      background: #edf6ff;
      border-radius: 100px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    h6 {
      font-size: 16px;
      margin-bottom: 16px;
    }
    p {
        max-width: 240px;
        font-size: 14px;
        line-height: 22px;
        margin: 0 auto;
        color: #b7b7b7;
    }
    }
  }
`;

const Steps = ({ batch, heading, content }) => {
  return (
    <StepsStyle>
      <div className="step">
        <div className="image-sec">
          <img src="./step-1.webp" />
        </div>
        <div className="content-sec">
          <span>{batch}</span>
          <h6>{heading}</h6>
          <p>{content}</p>
        </div>
      </div>
    </StepsStyle>
  );
};

export default Steps;

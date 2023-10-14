import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const EarnMoneyStyle = styled.div`
  padding: 0px 16px;
  @media screen and (min-width: 768px) {
    padding: 0px;
  }
  .earmoney-section {
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: space-between;
    margin: 45px 0px;

    @media screen and (min-width: 768px) {
      margin: 85px 0px;
    }

    @media screen and (min-width: 1260px) {
      flex-direction: row;
    }

    .image {
      width: 750px;
      display: none;
      @media screen and (min-width: 1260px) {
        display: block;
      }
      img {
        max-width: 100%;
      }
    }

    h1 {
      font-size: 25px;
      color: rgb(30, 41, 59);
    }

    h2 {
      font-size: 45px;
      max-width: 550px;
      margin-bottom: 10px;
      color: rgb(30, 41, 59);
      @media screen and (min-width: 768px) {
        font-size: 65px;
      }
    }
    span {
      color: #7895ad;
    }
  }

  .btns {
    display: flex;
    gap: 20px;
    margin-top: 50px;
    a {
      text-decoration: none;
      padding: 15px 20px;

      color: #fff;
      border-radius: 100px;
      font-size: 14px;
      transition: 0.5s all ease-in-out;
      &.saving-btn {
        transition: 0.5s all ease-in-out;
        background: #000;
        :hover {
          background: rgb(30, 41, 59);
        }
      }
      &.discover-btn {
        transition: 0.5s all ease-in-out;
        border: 1px solid #eeeeee;
        color: #000;

        :hover {
          transition: 0.5s all ease-in-out;
          background: #eeeeee;
        }
      }
    }
  }
`;

const EarnMoney = () => {
  return (
    <EarnMoneyStyle>
      <div className="container">
        <div className="earmoney-section">
          <div className="content">
            <h1>LOGO</h1>
            <h2>Earn free money with Us.</h2>
            <span>With Ciseco you will get freeship & savings combo...</span>
            <div className="btns">
              <NavLink to="/" className="saving-btn">
                Saving Combos
              </NavLink>
              <NavLink to="/" className="discover-btn">
                Discover More
              </NavLink>
            </div>
          </div>
          <div className="image">
            <img src="./earn-money.webp" alt="Earn Money" />
          </div>
        </div>
      </div>
    </EarnMoneyStyle>
  );
};

export default EarnMoney;

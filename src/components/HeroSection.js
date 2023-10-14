import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const HeroStyle = styled.div`
  background: #e3ffe6;

  @media screen and (min-width: 768px) {
    padding: 40px 0px;
  }
  .home-inner {
    display: flex;
    flex-direction: column-reverse;
    @media screen and (min-width: 1260px) {
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }
    a {
      display: inline-flex;
      align-items: center;
      padding: 15px 30px;
      background: #0f172a;
      gap: 8px;
      border-radius: 100px;
      color: #fff;
      text-decoration: none;
      font-size: 12px;
      margin-top: 20px;
      transition: 0.5s all ease-in-out;
      &:hover {
        transition: 0.5s all ease-in-out;
        background: #1e293b;
      }
      @media screen and (min-width: 768px) {
        margin-top: 50px;
      }
    }
    svg {
      width: 20px;
      height: 20px;
    }

    span {
      font-size: 16px;
    }

    h1 {
      font-size: 18px;
      margin-top: 20px;
      line-height: 24px;
      max-width: 700px;
      @media screen and (min-width: 768px) {
        font-size: 64px;
        line-height: 74px;
      }
    }
  }

  .content-section {
    margin-top: 20px;

    padding: 0px 16px 20px 16px;
    @media screen and (min-width: 768px) {
      padding: 0px;
      padding-bottom: 16px;
    }
    @media screen and (min-width: 1260px) {
      margin-top: 0px;
      padding-bottom: 0px;
    }
  }

  img {
    max-width: 100%;
  }

  .image-section {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    display: none;
    @media screen and (min-width: 1260px) {
      display: block;
    }
  }
`;

const HeroSection = ({ title, tag }) => {
  return (
    <HeroStyle>
      {" "}
      <div className="container">
        <div className="home-inner">
          <div className="content-section">
            <span>{tag}</span>
            <h1>{title}</h1>
            <NavLink to="/products">
              Explore Now{" "}
              <svg class="w-5 h-5 ml-2.5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M22 22L20 20"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </NavLink>
          </div>
          <div className="image-section">
            <img src="./hero-right-3.webp" alt="Home Section" />
          </div>
        </div>
      </div>
    </HeroStyle>
  );
};

export default HeroSection;

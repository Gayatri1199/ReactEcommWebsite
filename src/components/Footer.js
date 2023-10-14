import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FooterStyle = styled.div`
  margin-top: 50px !important;

  .social-links {
    margin-top: 20px;
  }
  .link {
    display: flex;
    gap: 8px;
    margin-bottom: 4px;
  }
  .icon {
    width: 20px;
    display: inline-block;
    img {
      max-width: 100%;
    }
  }

  .name {
    font-size: 15px;
  }

  .footer-inner {
    display: flex;
    max-width: 1276px;
    margin: auto;
    justify-content: space-between;
    padding-top: 50px !important;
    border-top: 1px solid #e7e7e9;
    flex-wrap: wrap;
    padding-bottom: 20px;
    @media screen and (min-width: 768px) {
      gap: 80px;
      justify-content: unset;
    }
    @media screen and (min-width: 1260px) {
      flex-wrap: nowrap;
      padding-bottom: 0px;
    }

    a {
      display: block;
      color: #4b5563;
      font-size: 14px;
      text-decoration: none;
      margin-bottom: 12px;
      transition: 0.5s all ease-in-out;
      :hover {
        transition: 0.5s all ease-in-out;
        color: #000000;
      }
    }

    .footer-section {
      width: 40%;
      padding-left: 16px;
      @media screen and (min-width: 768px) {
        padding-left: 0px;
      }
      @media screen and (min-width: 1260px) {
        width: 25%;
      }

      h6 {
        color: #374151;
        font-size: 16px;
        margin-top: 22px;
        margin-bottom: 20px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-section">
            <h1>LOGO</h1>
            <div className="social-links">
              <div className="link">
                <span className="icon">
                  <img src="./Facebook.svg" alt="Facebook" />
                </span>
                <span className="name">Facebook</span>
              </div>
              <div className="link">
                <span className="icon">
                  <img src="./youtube.svg" alt="Youtube" />
                </span>
                <span className="name">Youtube</span>
              </div>
              <div className="link">
                <span className="icon">
                  <img src="./telegram.svg" alt="Telegram" />
                </span>
                <span className="name">Telegram</span>
              </div>
              <div className="link">
                <span className="icon">
                  <img src="./twitter.svg" alt="Twitter" />
                </span>
                <span className="name">Twitter</span>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <h6>Getting started</h6>
            <NavLink to="/">Release Notes</NavLink>
            <NavLink to="/">Upgrade Guide</NavLink>
            <NavLink to="/">Browser Support</NavLink>
            <NavLink to="/">Dark Mode</NavLink>
          </div>

          <div className="footer-section">
            <h6>Getting started</h6>
            <NavLink to="/">Release Notes</NavLink>
            <NavLink to="/">Upgrade Guide</NavLink>
            <NavLink to="/">Browser Support</NavLink>
            <NavLink to="/">Dark Mode</NavLink>
          </div>
          <div className="footer-section">
            <h6>Getting started</h6>
            <NavLink to="/">Release Notes</NavLink>
            <NavLink to="/">Upgrade Guide</NavLink>
            <NavLink to="/">Browser Support</NavLink>
            <NavLink to="/">Dark Mode</NavLink>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;

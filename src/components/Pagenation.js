import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const PageNationStyle = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #9898a5;
  letter-spacing: 0.55px;
  cursor: default;

  a {
    color: #161618;
    text-decoration: none;
  }
`;
const Pagenation = ({ title }) => {
  return (
    <PageNationStyle>
      <NavLink to="/">Home</NavLink> / <span>{title}</span>
    </PageNationStyle>
  );
};

export default Pagenation;

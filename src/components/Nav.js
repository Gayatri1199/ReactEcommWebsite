import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.div`
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;
      li {
        list-style: none;
      }
      a {
        padding: 8px 16px;
        position: relative;
        color: #161618;
        text-decoration: none;
        border-radius: 100px;
        font-weight: 400;
        transition: 0.5s all ease-in-out;
        &:hover {
          transition: 0.5s all ease-in-out;
          background: #f1f5f9;
        }
      }
      svg {
        min-width: 20px;
        height: 20px;
      }

      .cart-total {
        position: absolute;
        font-size: 9px;
        top: 0px;
        width: 15px;
        background: #0ea5e9;
        height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 6px;
        border-radius: 100px;
        color: #fff;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavStyle>
      <div className="navbar">
        <ul className="navlists">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </NavStyle>
  );
};

export default Nav;

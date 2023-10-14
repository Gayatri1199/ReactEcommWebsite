import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import NavBtn from "./NavBtns";
const HeaderStyle = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 1;
  background: #ffffff;
  .header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
  }

  h1 {
    color: #161618;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 0px;
    @media screen and (min-width: 768px) {
      position: static;
      transform: none;
    }
  }
  .menu-button {
    @media screen and (min-width: 1260px) {
      display: none;
    }
  }

  a {
    text-decoration: none;
  }

  .navbar {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  .ipad-menu {
    height: 100%;
    background: #eeeeee;
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    transition: 0.5s all ease-in-out;
    height: 100vh;
    &.active {
      left: 0%;
      transition: 0.5s all ease-in-out;
    }

    h1 {
      margin-bottom: 20px;
      padding: 4px;
      position: static;
      transform: none;
    }
    .navbar {
      display: block;
      .navlists {
        display: block;
        a {
          padding: 0px 4px 10px 4px;
          font-size: 12px;
          margin-bottom: 10px;
          display: block;
        }
      }
    }
  }

  .menu-button {
    height: 30px;
    width: 30px;
    background: transparent;
    position: absolute;
    top: 7px;
    left: 15px;
    border: none;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

const Header = () => {
  const [menu, setMenu] = useState();

  const displayMenu = () => {
    const Body = document.getElementsByTagName("body");
    // Body.style.backgroundColor = "#ffffff";
    document.body.classList.add("salmon");
  };

  return (
    <HeaderStyle>
      <div className="container">
        <div className="header-inner">
          <NavLink to="/">
            <h1>LOGO</h1>
          </NavLink>
          <Nav />
          <NavBtn />
        </div>
      </div>

      <button onClick={() => setMenu(!menu)} className="menu-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      <div
        className={`ipad-menu ${menu ? "active" : ""}`}
        onClick={displayMenu()}
      >
        <h1>LOGO</h1>
        <Nav />
      </div>
    </HeaderStyle>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
const NavBtnStyle = styled.div`
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
    transition: 0.5s all ease-in-out;
    border-radius:100px;
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

const NavBtn = () => {
  // const { total_item } = useCartContext();
  return (
    <NavBtnStyle>
      <div className="nav-btns">
        <ul>
          <li>
            <NavLink to="/Cart">
              <svg
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9 8H21"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              {/* <span className="Cart-total">{total_item}</span> */}
            </NavLink>
          </li>
          <li>
            <NavLink to="/Cart">
              <svg
                class=" w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </NavLink>
          </li>
        </ul>
      </div>
    </NavBtnStyle>
  );
};

export default NavBtn;

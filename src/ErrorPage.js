import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const ErrorPageStyle = styled.div`
  @keyframes shake {
    10% {
      transform: translateX(-1px);
    }

    50% {
      transform: translateX(5px);
    }

    100% {
      transform: translateX(-1px);
    }
  }
  .error-page {
    display: flex;
    max-width: 1000px;
    margin: 60px auto;
    background: oldlace;
    justify-content: center;
    padding: 50px;
    align-items: center;
    gap: 70px;
    border-radius: 30px;

    .image {
      max-width: 500px;

      img {
        max-width: 100%;
      }
    }

    h1 {
      font-size: 42px;
    }

    p {
      color: #969696;
      margin-bottom: 20px;
    }

    a {
      background: rgb(22, 22, 24);
      color: #fff;
      text-decoration: none;
      padding: 10px 30px;
      border-radius: 100px;
      margin-top: 10px;
      display: inline-block;

      svg {
        width: 20px;
        display: inline-block;
        vertical-align: middle;
        margin-left: 4px;
        animation: shake 0.5s infinite;
      }
    }
  }
`;
const ErrorPage = () => {
  return (
    <ErrorPageStyle>
      <div className="error-page">
        <div className="content">
          <h1>Not Found!!</h1>
          <p>Please search Again!!</p>
          <NavLink to="/products">
            Shop Now{" "}
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path
                d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3.5 12H20.33"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </NavLink>
        </div>
        <div className="image">
          <img src="./error-img.webp" alt="Error Page" />
        </div>
      </div>
    </ErrorPageStyle>
  );
};

export default ErrorPage;

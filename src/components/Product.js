import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "../helpers/FormatPrice";

const ProductStyle = styled.div`
  width: 100%;
  @media screen and (min-width: 1260px) {
    width: 100%;
  }
  a {
    text-decoration: none;
  }
  .card {
    width: 100%;
    background: #f3f4f6;
    border-radius: 10px;
    transition: 0.5s all ease-in-out;
    position: relative;
    overflow: hidden;
    min-height: 250px;
    @media screen and (min-width: 1260px) {
      width: 300px;
    }

    &:hover {
      transition: 0.5s all ease-in-out;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      img {
        transition: 0.5s all ease-in-out;
        transform: scale(1.2);
      }
    }

    .image-section {
      width: 100%;
      overflow: hidden;
      height: 200px;
      @media screen and (min-width: 1260px) {
        width: 300px;
      }

      img {
        max-width: 100%;
        border-radius: 20px 20px 0px 0px;
        transition: 0.5s all ease-in-out;
        height: 100%;
      }
    }
  }

  .title {
    background: rgb(255, 255, 255);
    display: inline-block;
    padding: 2px 14px;
    font-size: 12px;
    text-transform: capitalize;
    color: #161618;
    font-weight: 600;
    border-radius: 100px;
    position: absolute;
    top: 15px;
    left: 15px;
  }

  .company {
    background: rgb(255, 255, 255);
    display: inline-block;
    padding: 2px 14px;
    font-size: 12px;
    text-transform: capitalize;
    color: #161618;
    font-weight: 600;
    border-radius: 100px;
    position: absolute;
    bottom: 85px;
    left: 15px;
    @media screen and (min-width: 768px) {
      top: 15px;
      right: 15px;
      bottom: unset;
      left: unset;
    }
  }

  .detail {
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h3 {
      text-decoration: none;
      font-size: 14px;
      color: #161618;
      text-transform: capitalize;
      padding-right: 5px;
      @media screen and (min-width: 768px) {
        font-size: 16px;
      }
    }

    .price {
      padding: 5px;
      border: 2px solid green;
      font-size: 12px;
      color: green;
      font-family: Poppins, sans-serif;
      border-radius: 5px;
    }
  }
`;

const Product = (curElem) => {
  const { id, name, image, price, category, company } = curElem;
  return (
    <ProductStyle className="card-wrapper">
      <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
          <div className="image-section">
            <img src={image} alt={name} />
          </div>
          <div className="detail">
            <p className="title">{category}</p>
            <h3>{name}</h3>
            <p className="price">{<FormatPrice price={price} />}</p>
            <p className="company">{company}</p>
          </div>
        </div>
      </NavLink>
    </ProductStyle>
  );
};

export default Product;

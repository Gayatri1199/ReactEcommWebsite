import React, { useState } from "react";
import styled from "styled-components";

import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

const AddToCartStyle = styled.div`
  .colors {
    .color-section {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }
    p {
      font-size: 14px;
      display: flex;
      align-item: center;
      margin-bottom: 0px;
    }

    .color-btn {
      width: 70px;
      height: 30px;
      border-radius: 100px;
      border: none;
      cursor: pointer;
    }

    .color-btn-wrapper {
      border-radius: 100px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 3px;
      margin-left: 8px;
      border: 1px solid tranparent;

      &.active {
        border: 1px solid #161618;
      }
    }
  }

  .add-to-cart {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
    a {
      display: block;
      width: 100%;
      text-decoration: none;
    }
    .atc-btn {
      width: 100%;
      color: rgb(255, 255, 255);
      background: rgb(22, 22, 24);
      display: block;
      text-align: center;
      padding: 10px;
      border: 1px solid #161618;
      min-height: 50px;
      font-size: 16px;
      letter-spacing: 0.55px;
      border-radius: 100px;
      cursor: pointer;
    }
  }
`;

const AddtoCart = ({ product }) => {
  const { id, colors, stock } = product;
  const { addtoCart } = useCartContext();
  const [color, setColor] = useState([0]);
  const [amount, setAmount] = useState(1);
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  return (
    <AddToCartStyle>
      <div className="colors">
        <div className="color-section">
          <p> Colors :</p>
          {colors.map((curColor, index) => {
            return (
              <span
                className={
                  color === curColor
                    ? "color-btn-wrapper active"
                    : "color-btn-wrapper"
                }
              >
                <button
                  key={index}
                  style={{ background: curColor }}
                  className={
                    color === curColor ? "color-btn active" : "color-btn"
                  }
                  onClick={() => setColor(curColor)}
                ></button>
              </span>
            );
          })}
        </div>

        <div className="add-to-cart">
          <CartAmountToggle
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
          />

          <NavLink
            to="/cart"
            onClick={() => addtoCart(id, color, amount, product)}
          >
            <button className="atc-btn">Add to Cart</button>
          </NavLink>
        </div>
      </div>
    </AddToCartStyle>
  );
};

export default AddtoCart;

import React from "react";
import styled from "styled-components";

const CartAmountToggleStyle = styled.div`
  .cart-toggle-btn {
    padding: 10px 15px;
    background: rgba(241, 245, 249, 0.7);
    border-radius: 100px;
    min-width: 121px;

    button {
      width: 30px;
      height: 30px;
      font-size: 16px;
      border-radius: 100%;
      border: 1px solid #e7e7e9;
      background: #ffffff;
    }

    span {
      font-size: 16px;
      display: inline-block;
      margin: 0px 10px;
      width: 11px;
    }
  }
`;

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <CartAmountToggleStyle>
      <div className="cart-toggle-btn">
        <button onClick={() => setDecrease()}>-</button>
        <span>{amount}</span>
        <button onClick={() => setIncrease()}>+</button>
      </div>
    </CartAmountToggleStyle>
  );
};

export default CartAmountToggle;

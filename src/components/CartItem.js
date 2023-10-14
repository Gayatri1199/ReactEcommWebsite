import React from "react";
import styled from "styled-components";
import FormatPrice from "../helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { useCartContext } from "../context/cart_context";

const CartItemStyle = styled.div``;
const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrease, setIncrease } = useCartContext();
  //   const [amount, setAmount] = useState(1);

  return (
    <CartItemStyle>
      <div className="cart-item-card">
        <div className="product-image">
          <img src={image} alt={id} />
        </div>
        <div className="product-details">
          <div className="product-detail-header">
            <h2 className="product-name">{name}</h2>

            <p className="product-price">
              <FormatPrice price={price} />
            </p>
          </div>
          <div className="color">
            {color}{" "}
            <div className="product-toggle">
              <CartAmountToggle
                amount={amount}
                setDecrease={() => setDecrease(id)}
                setIncrease={() => setIncrease(id)}
              />
            </div>
          </div>
          <div className="product-deatil-footer">
            <div className="sub-total">
              <p>
                <FormatPrice price={price * amount} />
              </p>
            </div>
            <div className="remove">
              <span onClick={() => removeItem(id)}>Remove</span>
            </div>
          </div>
        </div>
      </div>
    </CartItemStyle>
  );
};

export default CartItem;

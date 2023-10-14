import React from "react";
import { useCartContext } from "./context/cart_context";
import styled from "styled-components";
import CartItem from "./components/CartItem";
import FormatPrice from "./helpers/FormatPrice";
import { NavLink } from "react-router-dom";

const CartStyle = styled.div`
  max-width: 1280px;
  margin: 0 auto !important;

  .card-header {
    padding: 50px 0px;
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 20px;
    padding: 0px 16px 20px;
    @media screen and (min-width: 1260px) {
      padding: 0px 12px 20px;
    }
    span {
      font-size: 16px;
      color: rgb(159, 165, 165);
      max-width: 50%;
      display: block;
      margin-top: 20px;
    }
  }
  .cart-body {
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px 16px;
    @media screen and (min-width: 1260px) {
      display: flex;
      padding: 0px;
    }

    .cart-item {
      width: 100%;
      max-height: 400px;
      overflow-y: scroll;
      @media screen and (min-width: 1260px) {
        max-width: 700px;
        max-height: 100%;
        overflow: hidden;
      }
    }
  }

  .cart-item-card {
    display: flex;
    margin-bottom: 20px;
    padding: 10px;
    @media screen and (min-width: 768px) {
      padding: 20px;
    }

    .product-image {
      min-width: 100px;
      height: 100px;
      margin-right: 20px;
      max-width: 200px;
      border-radius: 10px;
      overflow: hidden;
      @media screen and (min-width: 768px) {
        min-width: 130px;
        height: 130px;
      }

      img {
        display: block;
        width: 100%;
        object-fit: cover;
        height: 100%;
      }
    }
  }

  .product-details {
    width: 100%;
  }

  .product-detail-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .product-name {
      font-size: 16px;
      letter-spacing: 0.55px;
    }
  }

  .order-total-amount {
    position: sticky;
    top: 20px;
    margin-top: 50px;
    width: 100%;
    @media screen and (min-width: 1260px) {
      max-width: 400px;
      margin-top: 0px;
    }
    h5 {
      font-size: 18px;
      color: #161618;
      margin-bottom: 20px;
    }
    p {
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
      padding-bottom: 12px;
      border-bottom: 1px solid #e7e7e9;
      &::last-child {
        border-bottom: none;
      }
      span {
        color: #6f6f79;
        &.price {
          color: #161618;
          font-weight: 600;
        }
      }
    }
  }

  .cart-btns {
    display: flex;
    gap: 8px;
    margin-top: 30px;
    .continue-btn,
    .clear-cart {
      width: 50%;
      padding: 10px;
      border-radius: 100px;
      background: #161618;
      border: 1px solid #161618;
      color: #161618;
      letter-spacing: 0.55px;
      text-align: center;
      font-size: 12px;
      cursor: pointer;
      transition: 0.5s all ease-in-out;
    }
    .clear-cart {
      background: #ffffff;
    }
    a {
      display: block;
      transition: 0.5s al ease-in-out;
      color: #ffffff;
      text-decoration: none;
    }
  }

  .product-deatil-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 14px;
    letter-spacing: 0.55px;
  }

  .color {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    align-items: center;
  }

  .cart-toggle-btn {
    @media screen and (max-width: 767px) {
      padding: 5px;
      display: flex;
      align-items: center;
      min-width: 41px;

      span {
        margin: 0px 4px;
        font-size: 12px;
        text-align: center;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15px;
        height: 15px;
        font-size: 15px;
      }
    }
  }
  .product-price {
    @media screen and (max-width: 767px) {
      font-size: 12px;
    }
  }

  .product-deatil-footer {
    @media screen and (max-width: 767px) {
      margin-top: 12px;
    }
  }

  .sub-total,
  .remove {
    @media screen and (max-width: 767px) {
      font-size: 12px;
    }
  }
`;

const Cart = () => {
  const { cart, total_price, shipping_fee, clearCart } = useCartContext();
  console.log("This is from Cart.js", cart);

  if (cart.length === 0) {
    return <div>Cart is Empty</div>;
  }
  return (
    <CartStyle>
      <div className="card-header">
        <h1>Shopping Cart</h1>
        <div className="breadcrumb">
          <span>Lets See what you are going to buy!!</span>
        </div>
      </div>
      <div className="cart-body">
        <div className="cart-item">
          {cart?.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <div className="order-total-amount">
          <h5>Order Summary</h5>
          <p>
            <span>Subtotal</span>
            <span className="price">
              <FormatPrice price={total_price} />
            </span>
          </p>

          <p>
            <span>Shipping Charges</span>
            <span className="price">
              <FormatPrice price={shipping_fee} />
            </span>
          </p>

          <p>
            <span>Order Total</span>
            <span className="price">
              <FormatPrice price={total_price + shipping_fee} />
            </span>
          </p>
          <div className="cart-btns">
            <div className="continue-btn">
              <NavLink to="/products">Continue Shopping</NavLink>
            </div>
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </CartStyle>
  );
};

export default Cart;

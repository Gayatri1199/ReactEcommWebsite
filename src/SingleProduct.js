import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/product-context";
import styled from "styled-components";
import Pagenation from "./components/Pagenation";
import MyImage from "./components/MyImage";
import FormatPrice from "./helpers/FormatPrice";
import AddtoCart from "./components/AddtoCart";
import Perks from "./components/Perks";

const SingleProductStyle = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 20px auto !important;
  .single-product-wrapper {
    display: flex;
    gap: 40px;
    align-items: flex-start;
    padding: 0px 12px;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      padding: 0px;
      flex-direction: row;
    }
    @media screen and (min-width: 1260px) {
      padding: 0px;
    }

    .image-section {
      width: 100%;
      @media screen and (min-width: 768px) {
        width: calc(50% - 40px);
        position: sticky;
        top: 20px;
      }
    }
    .content-section {
      @media screen and (min-width: 768px) {
        width: calc(50% - 40px);
      }
      h2 {
        font-size: 26px;
        margin: 12px 0px;
        text-transform: capitalize;
      }
      .price-review {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 16px;
        span {
          display: inline-block;
          font-size: 12px;
          &.price {
            padding: 5px;
            border: 2px solid green;
            color: green;
            font-weight: bold;
            border-radius: 15px;
            font-size: 14px;

            position: relative;
            ::after {
              content: "";
              height: 60%;
              width: 1px;
              display: block;
              background: #cdd0d0;
              position: absolute;
              top: 7px;
              right: -13px;
            }
          }

          &.stars {
            display: flex;
            color: #475569;

            svg {
              min-width: 12px;
              color: #ffb100;
              margin-right: 4px;
            }
          }

          &.reviews {
            text-decoration: underline;
            color: #475569;
            cursor: pointer;
          }
        }
      }
      .in-stock {
        padding: 5px 15px;
        font-size: 12px;
        display: inline-block;
        border-radius: 5px;
        font-weight: 600;
        margin-bottom: 12px;

        &.available {
          border: 2px solid green;
          color: green;
          background: #b4edb4;
        }

        &.out-of-stock {
          border: 2px solid red;
          color: red;
          background: #ffc8c8;
        }
      }

      .description {
        padding-top: 30px;
        border-top: 1px solid #e7e7e9;
        margin-top: 30px;
        h3 {
          padding: 10px 15px;
          font-size: 16px;
          border: 1px solid #e7e7e9;
          background: #fafafb;
          border-radius: 10px;
          color: #161618;
        }
        .content {
          padding: 20px 10px;
          font-size: 12px;
          line-height: 22px;
          letter-spacing: 0.55px;
          color: #7f7f81;
        }
      }
    }
  }
`;

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  console.log(singleProduct);
  const { id } = useParams();
  const {
    id: alias,
    name,
    company,

    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  console.log("This is Array of Images", image);
  if (isSingleLoading) {
    return <div>Loading....</div>;
  }
  return (
    <SingleProductStyle>
      <div className="single-product-wrapper">
        <div className="image-section">
          <MyImage imgs={image} />
        </div>
        <div className="content-section">
          <Pagenation title={name} />
          <h2>{name}</h2>
          <div className="price-review">
            <span className="price">
              <FormatPrice price={price} />
            </span>
            <span className="stars">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-5 h-5 pb-[1px] text-yellow-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {stars}
            </span>
            <span className="reviews">{reviews} Reviews</span>
          </div>
          <div
            className={`in-stock ${stock > 0 ? "available" : "out-of-stock"} `}
          >
            {stock > 0 ? "Available" : "Out of Stock"}
          </div>

          {stock > 0 && <AddtoCart product={singleProduct} />}
          <div className="description">
            <h3>Description</h3>
            <div className="content">{description}</div>
            <Perks />
          </div>
        </div>
      </div>
    </SingleProductStyle>
  );
};

export default SingleProduct;

import React, { useState } from "react";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";
import { useFilterContext } from "./context/filter_context";

const ProductStyle = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto !important;

  .upper-section {
    padding: 50px 16px;
    border-bottom: 1px solid #e7e7e9;
    @media screen and (min-width: 1260px) {
      padding: 50px 0px;
    }
    h2 {
      font-size: 35px;

      margin-bottom: 15px;
    }

    p {
      font-size: 16px;
      color: #9fa5a5;

      @media screen and (min-width: 1260px) {
        max-width: 50%;
      }
    }
  }

  .filter-sort-section {
    max-width: 250px;
    width: 100%;
    position: absolute;
    top: 60px;
    left: -100%;
    transition: 0.5s all ease-in-out;
    &.active {
      transition: 0.5s all ease-in-out;
      @media screen and (max-width: 767px) {
        left: 0;
        background: #e7e7e9;
        z-index: 1;
        height: 100vh;
        overflow: auto;
        padding: 16px;
      }
    }
    @media screen and (min-width: 768px) {
      position: sticky;
      left: unset;
    }
  }

  .catalogue-page {
    display: flex;

    margin-top: 50px;
    align-items: flex-start;
    padding: 0px 16px;
    @media screen and (min-width: 1260px) {
      padding: 0px;
      gap: 80px;
    }
    .card-wrapper {
      width: 47%;
      .card {
        min-height: 214px;
        .image-section {
          height: 140px;
          @media screen and (min-width: 768px) {
            height: 200px;
          }
        }
        @media screen and (min-width: 768px) {
          min-height: 250px;
        }
      }
      @media screen and (min-width: 768px) {
        width: 48%;
      }

      @media screen and (min-width: 1260px) {
        width: 31%;
      }
    }
  }

  .clear-filter-btn {
    button {
      padding: 10px 15px;
      background: rgb(14, 165, 233);
      border: none;
      color: #fff;
      margin-top: 10px;
    }
  }

  .sort {
    margin-bottom: 20px;
    text-align: right;
    display: flex;
    gap: 16px;
    align-items: center;
    span {
      width: 100%;
      text-align: center;
      border: 1px solid #161618;
      display: block;
      @media screen and (min-width: 767px) {
        display: none;
      }
    }
  }
`;

const Products = () => {
  const { filter_products } = useFilterContext();
  const [filter, setFilter] = useState();
  return (
    <ProductStyle>
      <div className="upper-section">
        <h2>Collection</h2>
        <p>
          We not only help you design exceptional products, but also make it
          easy for you to share your designs with more like-minded people.
        </p>
      </div>
      <div className="catalogue-page">
        <div className={`filter-sort-section ${filter ? "active" : ""}`}>
          <div className="filters">
            <FilterSection />
          </div>
        </div>

        <div className="products-container">
          <div className="sort">
            <span onClick={() => setFilter(!filter)}>Filter</span>
            <Sort />
          </div>
          <ProductList />
        </div>
      </div>
    </ProductStyle>
  );
};

export default Products;

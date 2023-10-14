import React from "react";
import { useProductContext } from "../context/product-context";
import styled from "styled-components";
import Product from "./Product";

const FeatureProductStyle = styled.div`
  margin: 45px 0px !important;
  @media screen and (min-width: 768px) {
    margin: 70px 0px !important;
  }

  .feature-section {
    max-width: 1250px;
    width: 100%;
    margin: 0 auto;
    padding: 0px 0px 0px 16px;
    @media screen and (min-width: 768px) {
      padding: 0px;
    }

    h1 {
      margin-bottom: 20px;
      font-size: 20px;
      color: rgb(107, 114, 128);
      @media screen and (min-width: 768px) {
        font-size: 30px;
      }
    }
  }

  .cards {
    display: flex;
    justify-content: space-between;
    overflow: scroll;
    gap: 20px;
    @media screen and (min-width: 1260px) {
      overflow: hidden;
      gap: 0px;
    }
    .card {
      min-width: 300px;
    }
  }
`;

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <FeatureProductStyle>
      <div className="container">
        <div className="feature-section">
          <h1>Chosen By Our Experts</h1>
          <div className="cards">
            {featureProducts.map((curElem) => {
              return <Product key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </div>
    </FeatureProductStyle>
  );
};

export default FeatureProduct;

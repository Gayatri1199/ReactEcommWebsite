import React from "react";
import HeroSection from "./components/HeroSection";
import EarnMoney from "./components/EarnMoney";
import Steps from "./components/Steps";
import styled from "styled-components";
import FeatureProduct from "./components/FeatureProduct";

const HomeStyle = styled.div`
  .step-section {
    display: flex;
    justify-content: space-between;
    margin: 85px 0px !important;
    flex-wrap: wrap;
    padding: 0px 16px;
    @media screen and (min-width: 1260px) {
      flex-wrap: nowrap;
    }
  }
`;

const Home = () => {
  return (
    <HomeStyle className="home-page">
      <HeroSection
        title="Exclusive Collection For Everyone"
        tag="In this season, find the best 🔥"
      />
      <FeatureProduct />
      <EarnMoney />

      <div className="step-section container">
        <Steps
          batch="Step 1"
          heading="Filter & Discover"
          content="Smart filtering and suggestions make it easy to find"
        />
        <Steps
          batch="Step 2"
          heading="Add to bag"
          content="Easily select the correct items and add them to the car"
        />
        <Steps
          batch="Step 3"
          heading="Fast shipping"
          content="The carrier will confirm and ship quickly to you"
        />
        <Steps
          batch="Step 4"
          heading="Enjoy the product"
          content="Have fun and enjoy your 5-star quality products"
        />
      </div>
    </HomeStyle>
  );
};

export default Home;

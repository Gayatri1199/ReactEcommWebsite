import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/product-context";
import EarnMoney from "./components/EarnMoney";
import Perks from "./components/Perks";
import Steps from "./components/Steps";
import styled from "styled-components";

const AboutStyle = styled.div`
  .step-section {
    display: flex;
    justify-content: space-between;
    margin: 85px 0px !important;
    flex-wrap: wrap;
    @media screen and (min-width: 1260px) {
      flex-wrap: nowrap;
    }
  }
`;

const About = () => {
  // const myName = useProductContext();
  return (
    <AboutStyle>
      {/* {myName} */}
      <HeroSection
        title="More About the Stores you may like"
        tag="In this season, know about the best 🔥"
      />
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
    </AboutStyle>
  );
};

export default About;

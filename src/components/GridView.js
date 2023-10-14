import React from "react";
import Product from "./Product";
import styled from "styled-components";

const GridViewStyle = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const GridView = ({ products }) => {
  console.log("This is from GridView Js", products);
  return (
    <GridViewStyle>
      {" "}
      {products.map((curELem) => {
        return <Product key={curELem.id} {...curELem} />;
      })}
    </GridViewStyle>
  );
};

export default GridView;

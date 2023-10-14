import React from "react";
import { useFilterContext } from "../context/filter_context";
import styled from "styled-components";

import GridView from "./GridView";

const ProductListStyle = styled.div``;

const ProductList = ({ products }) => {
  const { filter_products } = useFilterContext();
  console.log("filter_products", filter_products);

  return (
    <ProductListStyle>
      <GridView products={filter_products} />
    </ProductListStyle>
  );
};

export default ProductList;

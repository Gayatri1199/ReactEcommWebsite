import React, { useState } from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";

const SortStyle = styled.div`
  form {
    display: flex;
    position: relative;
    align-items: center;
  }
  select {
    padding: 10px;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    margin-left: 5px;
    background: #fff;
    font-size: 12px;

    &.active {
      display: block;
    }

    p {
      cursor: pointer;
      font-size: 12px;
      margin-bottom: 10px;
      :last-child {
        margin-bottom: 0px;
      }
    }
  }
`;

const Sort = () => {
  const { sorting } = useFilterContext();

  return (
    <SortStyle>
      <form action="#">
        <label htmlFor="sort">Sort:</label>
        <select id="sort" onClick={sorting}>
          <option value="lowest">price(lowest)</option>
          <option value="highest">price(highest)</option>
          <option value="a-z">price(A - Z)</option>
          <option value="z-a">price(Z - A)</option>
        </select>
      </form>
    </SortStyle>
  );
};

export default Sort;

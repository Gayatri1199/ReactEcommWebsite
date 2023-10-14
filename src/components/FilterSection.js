import React, { useState } from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import FormatPrice from "../helpers/FormatPrice";

const FilterSectionStyle = styled.div`
  form {
    input {
      padding: 10px;
      border: 2px solid #eeeeee;
      border-radius: 2px;
      margin-bottom: 20px;

      :focus-visible {
        outline: none !important;
      }
    }
  }
  .filters-section {
    h2 {
      font-size: 16px;
      color: rgb(22, 22, 24);
      font-weight: 400;
      margin: 30px 0px 20px 0px;
      svg {
        width: 20px;
        height: 20px;
        position: relative;
        top: 4px;
      }
    }
    .categories {
      button {
        display: block;
        width: 100%;
        text-align: left;
        background: #fff;
        border: none;
        text-transform: capitalize;
        margin-bottom: 16px;
        position: relative;
        padding-left: 30px;
        cursor: pointer;
        ::after {
          content: "";
          width: 20px;
          height: 20px;
          display: block;
          border: 2px solid #eeeeee;
          border-radius: 5px;
          position: absolute;
          left: 0;
          top: -1px;
        }
        ::before {
          content: "";
        }
      }
    }
  }

  .comapny {
    select {
      width: 100%;
      padding: 10px;
      border: 2px solid #eeeeee;
      border-radius: 5px;

      option {
        text-transform: capitalize;
        padding: 5px 10px;
      }
    }
  }

  .colors {
    button {
      position: relative;
      top: -14px;
      margin-right: 10px;
      width: 20px;
      height: 20px;
      background: transparent;
      border: navajowhite;
    }
    .btn-container {
      border: 2px solid rgb(0, 0, 0);
      display: inline-block;
      border-radius: 100%;
      margin-right: 5px;
      button {
        position: static;
        width: 30px;
        height: 30px;
        margin: 2px;
        border: navajowhite;
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
      }
    }
  }
`;

const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    all_products,
    updateFilterValue,
    clearFilters,
  } = useFilterContext();

  // We need unique data
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    if (property === "colors") {
      // return ["All", ...new Set([].concat(...newVal))];
      newVal = newVal.flat();
    }
    return (newVal = ["All", ...new Set(newVal)]);
  };

  // We need unique data
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");
  console.log("Here is my colors data", colorsData);

  return (
    <FilterSectionStyle>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={updateFilterValue}
          placeholder="Search"
        />
      </form>

      <div className="filters-section">
        <div className="categories">
          <h2>
            <svg
              class="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2V5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M16 2V5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M7 13H15"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M7 17H12"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M16 3.5C19.33 3.68 21 4.95 21 9.65V15.83C21 19.95 20 22.01 15 22.01H9C4 22.01 3 19.95 3 15.83V9.65C3 4.95 4.67 3.69 8 3.5H16Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>{" "}
            Categories
          </h2>
          {categoryOnlyData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={updateFilterValue}
                className={curElem === category ? "active" : ""}
              >
                {curElem}
              </button>
            );
          })}
        </div>
        <div className="comapny">
          <h2>
            <svg
              class="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2V5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M16 2V5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M7 13H15"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M7 17H12"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M16 3.5C19.33 3.68 21 4.95 21 9.65V15.83C21 19.95 20 22.01 15 22.01H9C4 22.01 3 19.95 3 15.83V9.65C3 4.95 4.67 3.69 8 3.5H16Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>{" "}
            Company
          </h2>
          <form action="#">
            <select
              name="company"
              id="company"
              className="filter-company-select"
              onClick={updateFilterValue}
            >
              {companyOnlyData.map((curElem, index) => {
                return (
                  <option key={index} value={curElem} name="company">
                    {curElem.toUpperCase()}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
        <div className="colors">
          <h2>
            <svg
              class="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2V5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M16 2V5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M7 13H15"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M7 17H12"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M16 3.5C19.33 3.68 21 4.95 21 9.65V15.83C21 19.95 20 22.01 15 22.01H9C4 22.01 3 19.95 3 15.83V9.65C3 4.95 4.67 3.69 8 3.5H16Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>{" "}
            Colors
          </h2>
          {colorsData.map((curColor, index) => {
            if (curColor === "All") {
              return (
                <button
                  type="button"
                  // style={{ backgroundColor: curColor }}
                  onClick={updateFilterValue}
                  key={index}
                  value={curColor}
                  name="color"
                  className="all-btn"
                >
                  All
                </button>
              );
            }
            return (
              <div className="btn-container">
                <button
                  type="button"
                  style={{ backgroundColor: curColor }}
                  onClick={updateFilterValue}
                  key={index}
                  value={curColor}
                  name="color"
                  className={color === curColor ? "active" : "ccc"}
                >
                  {color === curColor ? "" : null}
                </button>
              </div>
            );
          })}
        </div>
        <div className="price-range">
          <h2>
            <svg
              class="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2V5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M16 2V5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M7 13H15"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M7 17H12"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M16 3.5C19.33 3.68 21 4.95 21 9.65V15.83C21 19.95 20 22.01 15 22.01H9C4 22.01 3 19.95 3 15.83V9.65C3 4.95 4.67 3.69 8 3.5H16Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>{" "}
            Price
          </h2>
          <p>
            <FormatPrice price={price} />
          </p>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterValue}
          />
        </div>
        <div className="clear-filter-btn">
          <button onClick={clearFilters}>Clear Filters </button>
        </div>
      </div>
    </FilterSectionStyle>
  );
};

export default FilterSection;

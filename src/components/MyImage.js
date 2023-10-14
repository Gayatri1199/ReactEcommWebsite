import React from "react";
import styled from "styled-components";

const ImageStyle = styled.div`
  .upper-image {
    height: 250px;
    overflow: hidden;
    border-radius: 20px;
    margin-bottom: 20px !important;
    @media screen and (min-width: 1260px) {
      height: 400px;
    }

    :hover {
      img {
        transition: 0.5s all ease-in-out;
        transform: scale(1.2);
      }
    }
  }

  .lower-images {
    display: flex;
    justify-content: space-between;
    .lower-left,
    .lower-right {
      width: calc(50% - 10px);
      border-radius: 20px;
      overflow: hidden;
      :hover {
        img {
          transition: 0.5s all ease-in-out;
          transform: scale(1.2);
        }
      }
    }
  }
  img {
    max-width: 100%;
    height: 100%;
    transition: 0.5s all ease-in-out;
    width: 100%;
    object-fit: cover;
  }
`;
const MyImage = ({ imgs = [{ url: " " }] }) => {
  console.log("imgs", imgs);
  return (
    <ImageStyle>
      <div className="upper-image">
        <img src={imgs[0]?.url} alt={imgs.filename} />
      </div>
      <div className="lower-images">
        <div className="lower-left">
          <img src={imgs[1]?.url} alt={imgs.filename} />
        </div>
        <div className="lower-right">
          <img src={imgs[2]?.url} alt={imgs.filename} />
        </div>
      </div>
    </ImageStyle>
  );
};

export default MyImage;

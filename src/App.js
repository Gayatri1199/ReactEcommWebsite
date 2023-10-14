import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import Header from "./components/Header";
import styled from "styled-components";
import Footer from "./components/Footer";

const AppStyle = styled.div`
  * {
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  .container {
    max-width: 1500px;
    width: 100%;
    margin: 0px auto;
    @media screen and (min-width: 768px) {
      padding: 0px 16px;
    }
    @media screen and (min-width: 1260px) {
      padding: 0px 32px;
    }
  }
`;

function App() {
  return (
    <AppStyle>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </AppStyle>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Component/Navbar/navbar";
import Product from "./Component/Product/product";
import Footer from "./Component/Footer/footer";
import Header from "./Component/Header/header";
import About from "./Component/AboutMe/AboutMe";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <About />
    <Product />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

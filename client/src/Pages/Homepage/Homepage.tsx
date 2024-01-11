import React from "react";
import CardElement from "../../components/CardElement/CardElement";
import CardSlider from "../../components/CardSlider/CardSlider";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Homepage.css";
// import Trail from "../../components/trail/trail";
import FooterAbove from "../../components/FooterAbove/FooterAbove";
import Categories from "../../components/Categories/Categories";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="row carousel-col-row mb-5">
        <div className="col-10 carousel-col">
          <CardSlider />
        </div>
      </div>
      <Categories/>
      <FooterAbove/>
      <Footer />

    </>
  );
}

export default Homepage;

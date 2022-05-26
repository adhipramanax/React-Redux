import React, { Component } from "react";
import Navbar from "./../components/Navbar/Navbar";
import Header from "./../components/Header/Header";
import OurService from "./../components/OurService/OurService";
import WhyUs from "./../components/WhyUs/WhyUs";
import Carousel from "./../components/Carousel/Carousel";
import CardRentalCar from "./../components/Card/CardRentalCar";
import Footer from "./../components/Footer/Footer";

export default class extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <OurService />
        <WhyUs />
        <Carousel />
        <CardRentalCar />
        <Footer />
      </div>
    );
  }
}

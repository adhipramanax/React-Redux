import React, { Component } from "react";
import Navbar from "./../components/Navbar/Navbar";
import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
import FIndCard from "../components/Card/FIndCard";

export default class RentalCar extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <FIndCard />
        <Footer />
      </div>
    );
  }
}

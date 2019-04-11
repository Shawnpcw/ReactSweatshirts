import React from "react";
import Home from "./home";
import Header from "./Header";
import Carousel from "./CarouselCom";
import Inventory from "./Inventory";
export default function HomeComponent() {
  return (
    <div>
      <section id="home">
        <Header />
        <Home />
        <Carousel />
      </section>
      <section id="inv">
        <Inventory />
      </section>
    </div>
  );
}

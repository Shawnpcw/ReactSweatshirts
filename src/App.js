import React, { Component } from "react";
import Home from "./components/home";
import Header from "./components/Header";
import Carousel from "./components/CarouselCom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <section
            className="child"
            id="home"
            style={{ marginBottom: "20rem" }}
          >
            {/* <h1>Hello</h1> */}
            <Home />
            <Carousel />
          </section>
          <section
            style={{
              height: "1000px",
              backgroundColor: "blue",
              marginTop: "3rem"
            }}
            id="test"
            className="child"
          />
        </div>
      </div>
    );
  }
}

export default App;

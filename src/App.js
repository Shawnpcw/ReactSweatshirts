import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
// import Recomended from "./components/Recommended";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from "react";

import Inventory from "./components/Inventory";
import HomeComponent from "./components/HomeComponent";
import { Route, Switch } from "react-router-dom";
import ItemInformation from "./components/ItemInformation";
import Checkout from "./components/Checkout";
export default class MainRouter extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/item/:id" component={ItemInformation} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

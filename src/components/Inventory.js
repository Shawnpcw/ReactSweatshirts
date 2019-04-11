import React, { Component } from "react";
import { Row, Col } from "reactstrap";
const tempItems = [
  {
    name: "temp2",
    desc: "this is description for temp2",
    price: 25.0,
    img:
      "https://www.coolasamoose.com/DSN/coolasamoose/Commerce/ProductImages/mn1_000083.jpg"
  },
  {
    name: "temp1",
    desc: "this is description for temp1",
    price: 20.0,
    img: "https://www.themizzoustore.com/images/product/large/176460.jpg"
  },
  {
    name: "temp1",
    desc: "this is description for temp1",
    price: 20.0,
    img: "https://www.themizzoustore.com/images/product/large/176460.jpg"
  },
  {
    name: "temp3",
    desc: "this is description for temp3",
    price: 15.0,
    img:
      "https://www.msnbcstore.com/media/catalog/product/cache/4/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/m/s/msnbc_ampersand_lightweight_crewneck_sweatshirt_front_black_mockup.jpg"
  },
  {
    name: "temp2",
    desc: "this is description for temp2",
    price: 25.0,
    img:
      "https://www.coolasamoose.com/DSN/coolasamoose/Commerce/ProductImages/mn1_000083.jpg"
  },
  {
    name: "temp3",
    desc: "this is description for temp3",
    price: 15.0,
    img:
      "https://www.msnbcstore.com/media/catalog/product/cache/4/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/m/s/msnbc_ampersand_lightweight_crewneck_sweatshirt_front_black_mockup.jpg"
  },
  {
    name: "temp1",
    desc: "this is description for temp1",
    price: 20.0,
    img: "https://www.themizzoustore.com/images/product/large/176460.jpg"
  },
  {
    name: "temp2",
    desc: "this is description for temp2",
    price: 25.0,
    img:
      "https://www.coolasamoose.com/DSN/coolasamoose/Commerce/ProductImages/mn1_000083.jpg"
  },
  {
    name: "temp1",
    desc: "this is description for temp1",
    price: 20.0,
    img: "https://www.themizzoustore.com/images/product/large/176460.jpg"
  },
  {
    name: "temp3",
    desc: "this is description for temp3",
    price: 15.0,
    img:
      "https://www.msnbcstore.com/media/catalog/product/cache/4/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/m/s/msnbc_ampersand_lightweight_crewneck_sweatshirt_front_black_mockup.jpg"
  },
  {
    name: "temp3",
    desc: "this is description for temp3",
    price: 15.0,
    img:
      "https://www.msnbcstore.com/media/catalog/product/cache/4/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/m/s/msnbc_ampersand_lightweight_crewneck_sweatshirt_front_black_mockup.jpg"
  },
  {
    name: "temp2",
    desc: "this is description for temp2",
    price: 25.0,
    img:
      "https://www.coolasamoose.com/DSN/coolasamoose/Commerce/ProductImages/mn1_000083.jpg"
  }
];
export default class Inventory extends Component {
  render() {
    this.items = tempItems.map((item, key) => (
      <div className="itemStyle">
        <div className="marginAuto">{item.name}</div>
        <div>
          <img src={item.img} alt="" height="200rem" className="marginAuto" />
          <p>{item.desc}</p>
          Price:{item.price}
          <p />
        </div>
      </div>
    ));
    return this.items;
  }
}

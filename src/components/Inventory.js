import React, { Component } from "react";
<<<<<<< HEAD
//import { Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const ProductContext  = React.createContext();
=======
import { Route, Switch, Link } from "react-router-dom";

import { Row, Col } from "reactstrap";
>>>>>>> a58260fae421ba23225be26eb3517c642f400c1c
const tempItems = [
  {
    id: 1,
    name: "temp2",
    desc: "this is description for temp2",
    price: 25.0,
    img:
      "https://www.coolasamoose.com/DSN/coolasamoose/Commerce/ProductImages/mn1_000083.jpg"
  },
  {
    id: 2,
    name: "temp1",
    desc: "this is description for temp1",
    price: 20.0,
    img: "https://www.themizzoustore.com/images/product/large/176460.jpg"
  },
  {
    id: 3,
    name: "temp1",
    desc: "this is description for temp1",
    price: 20.0,
    img: "https://www.themizzoustore.com/images/product/large/176460.jpg"
  },
  {
    id: 4,
    name: "temp3",
    desc: "this is description for temp3",
    price: 15.0,
    img:
      "https://www.msnbcstore.com/media/catalog/product/cache/4/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/m/s/msnbc_ampersand_lightweight_crewneck_sweatshirt_front_black_mockup.jpg"
  },
  {
    id: 5,
    name: "temp2",
    desc: "this is description for temp2",
    price: 25.0,
    img:
      "https://www.coolasamoose.com/DSN/coolasamoose/Commerce/ProductImages/mn1_000083.jpg"
  },
  {
    id: 6,
    name: "temp3",
    desc: "this is description for temp3",
    price: 15.0,
    img:
      "https://www.msnbcstore.com/media/catalog/product/cache/4/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/m/s/msnbc_ampersand_lightweight_crewneck_sweatshirt_front_black_mockup.jpg"
  },
  {
    id: 7,
    name: "temp1",
    desc: "this is description for temp1",
    price: 20.0,
    img: "https://www.themizzoustore.com/images/product/large/176460.jpg"
  },
  {
    id: 8,
    name: "temp2",
    desc: "this is description for temp2",
    price: 25.0,
    img:
      "https://www.coolasamoose.com/DSN/coolasamoose/Commerce/ProductImages/mn1_000083.jpg"
  },
  {
    id: 9,
    name: "temp1",
    desc: "this is description for temp1",
    price: 20.0,
    img: "https://www.themizzoustore.com/images/product/large/176460.jpg"
  },
  {
    id: 10,
    name: "temp3",
    desc: "this is description for temp3",
    price: 15.0,
    img:
      "https://www.msnbcstore.com/media/catalog/product/cache/4/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/m/s/msnbc_ampersand_lightweight_crewneck_sweatshirt_front_black_mockup.jpg"
  },
  {
    id: 11,
    name: "temp3",
    desc: "this is description for temp3",
    price: 15.0,
    img:
      "https://www.msnbcstore.com/media/catalog/product/cache/4/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/m/s/msnbc_ampersand_lightweight_crewneck_sweatshirt_front_black_mockup.jpg"
  },
  {
    id: 12,
    name: "temp2",
    desc: "this is description for temp2",
    price: 25.0,
    img:
      "https://www.coolasamoose.com/DSN/coolasamoose/Commerce/ProductImages/mn1_000083.jpg"
  },
  {
    id: 13,
    name: "temp2",
    desc: "this is description for temp2",
    price: 25.0,
    img:
      "https://www.coolasamoose.com/DSN/coolasamoose/Commerce/ProductImages/mn1_000083.jpg"
  }
];


// handeleDetail = id => {
//   const oneitem =this.getItem(id);
//   this.setState (() => {
//   return { detailProduct: oneitem };
// });
// }

export default class Inventory extends Component {
 state = {
   items: tempItems
 }
  getItem = id =>{
    const item = this.state.oneitem.find(item => item.id === id);
    console.log(id); 
    return item;
    }

  render() {
    this.items = tempItems.map((item, _key) => (
<<<<<<< HEAD
    <div className="itemStyle">
      {/* <div className="marginAuto">  */}
          {item.name} 
      {/* </div> */}
       {/* <div className="img-container" onClick={console.log('You clicked on Image')}> */}
         
         
         <Link to={`/item/${item.id}`}>        
            <img src={item.img} alt="" height="200rem" className="marginAuto" />
         </Link>
         <button className="fas fa-car-plus"  onClick={() => {console.log('Clicked cart icon');}}>
         
         
         
         
         {/* disabled={incart ? true : false} */}
         {/* need to add incart in the object(list of items) */}
         {/* {inCart ? ( <p disabled>{""}in cart 
         </p> 
         ):( <i className="fas fa-car-plust"/>) } */}
         </button>
           <p>{item.desc}</p>
            Price:{item.price}
      {/* </div> */}
    </div>));
    return (this.items
      //    <ProductContext.Provider 
      // >
      // {this.props.children}
      );
    
=======
      <div className="itemStyle">
        {/* {/ <div className="marginAuto">  /} */}
        {item.name}
        {/* {/ </div> /} */}
        <Link to={`/item/${item.id}`}>
          <img src={item.img} alt="" height="200rem" className="marginAuto" />
        </Link>
        <button
          className="fas fa-car-plus"
          onClick={() => {
            console.log("Clicked cart icon");
          }}
        >
          {/* {/ disabled={incart ? true : false} /} */}
          {/* {/ need to add incart in the object(list of items) /} */}
          {/* {/ {inCart ? ( <p disabled>{""}in cart  */}
          {/* </p>  */}
          {/* ):( <i className="fas fa-car-plust"/>) } /} */}
        </button>
        <p>{item.desc}</p>
        Price:{item.price}
      </div>
    ));
    return this.items;
>>>>>>> a58260fae421ba23225be26eb3517c642f400c1c
  }
}

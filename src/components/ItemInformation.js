import React, { Component } from "react";
import Header from "./Header";
export default class ItemInformation extends Component {
  render() {
    return (
      <div>
        <Header />
        
        <div className="DetailContainer">  
            <img className="Image"
              src="https://i.pinimg.com/originals/bf/45/fa/bf45fa08c6ea00c5264160cc0a925d47.jpg"
              alt=""
            />
          <div className="ImgInfo">
            <h3>Name of Item : {this.props.match.params.id}</h3><br/>
            <h3>Price: $</h3>
            <div class="select"><h4>Size</h4>
                  <select> Select Size   
                         <option>XXL</option>
                         <option>Xl</option>
                         <option>L</option>
                         <option>M</option>
                         <option>S</option>
                  </select>
            </div>
            <br/>
              <ul>
                  <li><h3>This is description for item </h3></li>
                  <li>COME AND TAKE IT - Second Amendment t-shirt with several color options and sizes up to 5X.</li>
                  <li>PRODUCT QUALITY - 100% preshrunk cotton tees (Heathered colors are blended), screen printed using an eco-friendly plastisol or waterbased ink to ensure color fastness and long lasting durability.</li>
                   <li>FAST SHIPPING - Orders ship within one business day and FREE SHIPPING options are offered for all of our products.</li>
                       <li>SHIRTINVADERS BRAND - A one of a kind design, created by ShirtInvaders... Search "ShirtInvaders 2nd Amendment" to see our full product line.</li>
              </ul>
        
          </div>
          <div className="DeliveryInfo">
            <h4 >FREE Delivery Wednesday, April 24 - Wednesday, May 1</h4>
            <br/>
           <br/>
           <br/>
           <br/>
           <button>Add To Cart</button>
           <br/>
           <br/>
           <button>Buy Now</button>
          </div>
        </div> 
        <h1>Products related to this item</h1>     
      </div>
    );
  }
}

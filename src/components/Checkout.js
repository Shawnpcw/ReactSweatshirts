import React from "react";
import Header from "./Header";
import { Table } from "reactstrap";
import "./checkout.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
export default class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    return (
      <div>
        <Header />
        <div style={{ marginTop: "4rem" }} />
        <h1>Check out</h1>
        <div className="container">
          <Table>
            <thead>
              <tr>
                <th>Checkout</th>
                <th>Price</th>
                <th>Quanity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="imgclass">
                    <img
                      src="https://www.nbcstore.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/d/o/download-6.jpg"
                      alt=""
                      height="100px"
                      width="100px"
                    />
                  </div>
                  <div className="infowrapper">
                    <h3 className="title">Tee1</h3>
                    <p className="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur, repellat?
                    </p>
                  </div>
                </td>
                <td>19.99$</td>
                <td>
                  <input type="number" min="1" max="5" value="1" />
                  <p>remove</p>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="imgclass">
                    <img
                      src="https://cdn.shopify.com/s/files/1/1276/0753/products/sarah-marie-design-studio-sweatshirt-heather-navy-s-apres-run-hoodie-6899169165395_500x.jpg?v=1552724507"
                      alt=""
                      height="100px"
                      width="100px"
                    />
                  </div>
                  <div className="infowrapper">
                    <h3 className="title">Tee2</h3>
                    <p className="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laborum eveniet, veniam temporibus quasi debitis est
                      facere eius assumenda dolor architecto.
                    </p>
                  </div>
                </td>
                <td>22.99$</td>
                <td>
                  <input type="number" min="1" max="5" value="1" />
                  <p>remove</p>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="imgclass">
                    <img
                      src="https://m.media-amazon.com/images/I/61uNNybo79L._SR500,500_.jpg"
                      alt=""
                      height="100px"
                      width="100px"
                    />
                  </div>
                  <div className="infowrapper">
                    <h3 className="title">Tee3</h3>
                    <p className="desc">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur quisquam atque numquam! Optio, tenetur nisi.
                    </p>
                  </div>
                </td>
                <td>20.99$</td>
                <td>
                  <input type="number" min="1" max="5" value="1" />
                  <p>remove</p>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HashLink as Link } from "react-router-hash-link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    if (typeof window !== "undefined") {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        let currentScrollPos = window.pageYOffset;
        if (
          (maxScroll > 0 &&
            prevScrollpos > currentScrollPos &&
            prevScrollpos <= maxScroll) ||
          (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
          (prevScrollpos <= 0 && currentScrollPos <= 0)
        ) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-5.0rem"; // adjustable based your need
        }
        prevScrollpos = currentScrollPos;
      };
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div style={{ marginBottom: "2rem" }}>
        <Navbar color="light" light expand="md" className="sticky" id="navbar">
          <NavbarBrand href="/">E-Commerce Test</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/">Home</Link>
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink>
                  <AnchorLink href="#inv">Inventory</AnchorLink>
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink>
                  <Link to="/checkout"> Checkout</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

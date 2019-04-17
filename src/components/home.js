import React from "react";
import { Jumbotron, Button, NavLink, Container } from "reactstrap";
export default function home() {
  return (
    <div style={{ paddingTop: "3rem" }}>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome To [placeholder]!</h1>
          <p className="lead">[placeholder]</p>
        </Container>
      </Jumbotron>
    </div>
  );
}

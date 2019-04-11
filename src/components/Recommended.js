import React from "react";
import { Row, Col } from "reactstrap";

export default function Recommended() {
  return (
    <div>
      <Row className="mb-5">
        <Col
          style={{ backgroundColor: "red", height: "500px", width: "500px" }}
        >
          <img
            src="https://i.pinimg.com/originals/bf/45/fa/bf45fa08c6ea00c5264160cc0a925d47.jpg"
            alt=""
          />
        </Col>
        <Col
          style={{ backgroundColor: "blue", height: "500px", width: "500px" }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSCrUaBtyM4jWCTh5Ge3ROgjO_SbRk8IA7OECv81S8oDcjUZu"
            alt=""
          />
        </Col>
        <Col
          style={{ backgroundColor: "black", height: "500px", width: "500px" }}
        >
          <img
            src="https://www.themizzoustore.com/images/product/large/176460.jpg"
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
}

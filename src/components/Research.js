import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import img from "../assets/img/nicolas-arnold--hcfzUuQ3uw-unsplash.jpg";

export const Research = () => {
  return (
    <section className="pt-5 research" id="research">
      <hr />
      <Container>
        <Row className="align-items-center pt-4">
          <Col>
            <h1>Research</h1>
            <h2></h2>
            <h4></h4>
          </Col>
        </Row>
        <Row className="align-items-center pt-4">
          <Col xs={12} md={5} xl={5} align="left"></Col>
          <Col xs={12} md={7} xl={7}></Col>
        </Row>
        <Row>
          <Col
            className="pb-5"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card border="light" style={{ width: "60%" }}>
              <Card.Img
                variant="top"
                src="https://github.com/b08902094/my-website/blob/main/src/assets/img/nicolas-arnold--hcfzUuQ3uw-unsplash.jpg?raw=true"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

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
            <h2>Haptic Device for Virtual Reality Using Soft Joint Locking</h2>
            <h4>膨張機構を用いた仮想現実のためのハプティックデバイス</h4>
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
              <Card.Img variant="top" src={img} />
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

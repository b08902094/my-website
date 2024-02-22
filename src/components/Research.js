import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Research = () => {
  return (
    <section className="pt-4 research" id="research">
      <Container>
        <Row className="align-items-center pt-4">
          <Col>
            <h1>Haptic Device for Virtual Reality Using Soft Joint Locking</h1>
            <h3>膨張機構を用いた仮想現実のためのハプティックデバイス</h3>
          </Col>
        </Row>
        <Row className="align-items-center pt-4">
          <Col xs={12} md={5} xl={5} align="left"></Col>
          <Col xs={12} md={7} xl={7}></Col>
        </Row>
      </Container>
    </section>
  );
};

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import headerImg from "../assets/img/space-svgrepo-com.svg";
import Card from "react-bootstrap/Card";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={5} xl={5} style={{ margin: "0 auto" }}>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Hi! I'm Marika. ",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Hi! I'm Marika, a CS graduate student at NAIST",
                1000,
                "Hi! I'm Marika, a coding mentor",
                1000,
                "Welcome to my portfolio!",
                1000,
              ]}
              wrapper="span"
              speed={30}
              style={{
                fontSize: "3em",
                display: "inline-block",
                fontWeight: "bold",
              }}
              repeat={Infinity}
            />
          </Col>
          <Col xs={12} md={7} xl={7}>
            <Card border="light">
              <Card.Img
                src={
                  "https://raw.githubusercontent.com/b08902094/my-website/3c27ba36e59f1d5e8cedb5c276b2cb1205083550/src/assets/img/space-svgrepo-com.svg"
                }
                alt="Header Img"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

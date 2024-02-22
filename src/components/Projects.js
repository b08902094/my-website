import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../assets/img/gemma-evans-tGR6PIiARSE-unsplash.jpg";
import img2 from "../assets/img/tamara-gore-WAgochFWI7Q-unsplash.jpg";
import img3 from "../assets/img/lucrezia-carnelos-IMUwe-p1yqs-unsplash.jpg";
import img4 from "../assets/img/kelly-sikkema-gcHFXsdcmJE-unsplash.jpg";
export const Projects = () => {
  return (
    <Container className="pt-5 align-content-center projects" id="projects">
      <h1>Projects</h1>
      <br></br>
      <Row xs={1} md={3} xl={4} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>映画推薦システム</Card.Title>
              <Card.Text align="left">
                60000作以上の映画データセットから,
                ユーザーの好みに合わせた映画を推薦.
                マルチスレッド・マルチプロセスをそれぞれ実装.
                <br />
                使用言語: C言語
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>ケーキ販売ECサイト</Card.Title>
              <Card.Text align="left">
                管理者側と顧客側のUIをそれぞれ持ったECサイトを制作. <br />
                実装環境:Ruby on Rails + SQLite3 + Bootstrap
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={img4} />
            <Card.Body>
              <Card.Title>
                SONY Toioを用いたVIユーザー向けUIデザインツール
              </Card.Title>
              <Card.Text align="left">
                SONY Toioを用いて,
                目の不自由な人のUIデザインプロセスを助けるシステムを構築.
                <br />
                チーム規模: 7人
                <br />
                実装環境: Python + SONY Toio
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>VR Brainstorming</Card.Title>
              <Card.Text align="left">
                VRで公園, カフェ, 会議室など異なる環境をユーザーに提供し,
                その環境がユーザーの思考力や想像力にどのような影響を与えるかを調査.
                <br />
                チーム規模: 8人 <br />
                実装環境: Unity + MetaQuest
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

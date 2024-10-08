import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
export const Projects = () => {
  return (
    <Container className="pt-5 align-content-center projects" id="projects">
      <hr />
      <h1>Projects</h1>
      <br></br>
      <Row xs={1} md={3} xl={4} className="g-4">
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://github.com/b08902094/my-website/blob/main/src/assets/img/gemma-evans-tGR6PIiARSE-unsplash.jpg?raw=true"
            />
            <Card.Body>
              <Card.Title>映画推薦システム</Card.Title>
              <Card.Text align="left">
                60000作以上の映画データセットから,
                ユーザーの好みに合わせた映画を推薦.
                マルチスレッドマージソートで実行時間を短縮.
                <br />
                使用言語: C言語
                <br />
                期間: 2週間/約60時間
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://github.com/b08902094/my-website/blob/main/src/assets/img/tamara-gore-WAgochFWI7Q-unsplash.jpg?raw=true"
            />
            <Card.Body>
              <Card.Title>ケーキ販売ECサイト</Card.Title>
              <Card.Text align="left">
                管理者側と顧客側のUIをそれぞれ持ったECサイトを制作. <br />
                実装環境:Ruby on Rails + SQLite3 + Bootstrap <br />
                期間:1週間
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://github.com/b08902094/my-website/blob/main/src/assets/img/kelly-sikkema-gcHFXsdcmJE-unsplash.jpg?raw=true"
            />
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
            <Card.Img
              variant="top"
              src="https://github.com/b08902094/my-website/blob/main/src/assets/img/lucrezia-carnelos-IMUwe-p1yqs-unsplash.jpg?raw=true"
            />
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

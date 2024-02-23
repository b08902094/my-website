import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Vision = () => {
  return (
    <Container>
      <Row>
        <h1>Vision</h1>
        <Col xs={12} md={4}>
          <h4>Value</h4>
          <ul align="left">
            <li>わかりやすく使いやすいサービスの開発</li>
            <li>先端技術を利用して, すべての人が過ごしやすい社会に貢献</li>
            <li>些細なことも見逃さず, 繊細な仕事をする</li>
          </ul>
        </Col>
        <Col xs={12} md={4}>
          <h4>Skill</h4>
          <ul align="left">
            <li>どんな業務でも対応できるフルスタックスキル</li>
            <li>貪欲に学び続け, いつまでも最前線で戦うスキル</li>
            <li>課題を定格に見極め, 正確に解消するスキル</li>
          </ul>
        </Col>
        <Col xs={12} md={4}>
          <h4>Quality</h4>
          <ul align="left">
            <li>知識に貪欲であり続ける人である</li>
            <li>コミュニケーションで業務を円滑に進めることができる人になる</li>
            <li>柔軟な思考を持ち, 人の意見も素直に受け入れられる人である</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

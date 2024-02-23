import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Paper from "@mui/material/Paper";

export const Values = () => {
  return (
    <Container>
      <Row>
        <h1 className="pt-4">Values</h1>
        <Col xs={12} md={7}>
          <img src="https://github.com/b08902094/my-website/blob/main/src/assets/img/Team%20goals-pana.png?raw=true" />
          <a href="https://storyset.com/people" align="left">
            People illustrations by Storyset
          </a>
        </Col>
        <Col xs={12} md={5}>
          <div className="p-2">
            <h5 Style="color:Tomato;" align="left">
              ユーザーの声を反映し, ニーズの具現化に取り組む
            </h5>
            <h5 Style="color:Tomato;" align="left">
              継続的な学びと技術向上を支える環境
            </h5>
            <h5 Style="color:Tomato;" align="left">
              自分の仕事に誇りを持っている
            </h5>
          </div>
        </Col>
        <Row className="pt-4">
          <Col xs={12} md={4}>
            <h5>日常になくてはならない仕事ができるか</h5>
            <ul align="left">
              <li>潜在的なニーズを具現化したい</li>
              <li>常にお客様の目線で開発に取り組みたい</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5>チャレンジ精神を発揮できる環境か</h5>
            <ul align="left">
              <li>新しいことに挑戦することがやりがい</li>
              <li>広い視野を持てる環境</li>
              <li>分野, 部署を跨いだ交流</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5>常に学ぶ機会がある環境か</h5>
            <ul align="left">
              <li>自分の仕事に誇りを持てる・持っている</li>
              <li>スキルを高められる</li>
            </ul>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

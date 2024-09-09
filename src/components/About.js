import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { Col, Container, Row } from "react-bootstrap";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <h1 className="pt-5">Overview</h1>
          <Col xs={12} md={6}>
            <Timeline
              sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                  flex: 0.2,
                },
              }}
            >
              <TimelineItem>
                <TimelineOppositeContent>2019</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  国立台湾大学 情報工学科 入学
                  <br />
                  <span Style="color:DodgerBlue;">
                    &nbsp;&nbsp;映画推薦システム制作
                  </span>
                  <br />
                  &nbsp; &nbsp;&nbsp;&nbsp;C言語 マルチスレッド/マルチソート
                  <br />
                  <span Style="color:DodgerBlue;">
                    &nbsp;&nbsp;SONY Toio を用いたVIユーザー向けUIデザインツール
                  </span>
                  <br />
                  <span Style="color:DodgerBlue;">
                    &nbsp;&nbsp;VR Brainstorming
                  </span>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>2023</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>国立台湾大学 情報工学科 卒業</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  株式会社インフラトップ インターン
                  <br />
                  <span Style="color:DodgerBlue;">
                    &nbsp;&nbsp;ECサイト制作
                  </span>
                  <br />
                  &nbsp; &nbsp;&nbsp;Ruby on Rails + SQLite3 + Bootstrap
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>2024</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  奈良先端科学技術大学院大学 <br />
                  &nbsp; &nbsp; &nbsp;先端科学技術研究科 情報科学領域 入学
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Col>
          <Col xs={12} md={6} align="left">
            <div Style="background-color:#E4EAEA;">
              <div className="p-2">
                <h5>所属</h5>
                奈良先端科学技術大学院大学 先端科学技術研究科 情報科学領域
                <br />
                サイバネティクス・リアリティ工学研究室
                <h5 className="mt-2">出身</h5>
                愛知県
                <h5 className="mt-2">アルバイト/インターン</h5>
                DMM WEBCAMP 転職サポートメンター
                <br />
                豊橋総合動植物公園 改札業務
                <h5 className="mt-2">趣味</h5>
                ポケモン <br />
                プログラミング <br />
                モデリング <br />
                語学(TOEIC 950, TOEFL 102, HSK3, ドイツ語を勉強中)
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

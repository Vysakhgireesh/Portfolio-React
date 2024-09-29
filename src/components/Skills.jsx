import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const Skills = () => (
  <section className="py-5" id="skills">
    <Container>
      <h2 className="text-center mb-4">Skills</h2>
      <Row>
        <Col md={6} className="mb-4">
          <h5>HTML</h5>
          <ProgressBar now={90} label={`${90}%`} />
        </Col>
        <Col md={6} className="mb-4">
          <h5>CSS</h5>
          <ProgressBar now={90} label={`${90}%`} />
        </Col>
        <Col md={6} className="mb-4">
          <h5>JavaScript</h5>
          <ProgressBar now={75} label={`${75}%`} />
        </Col>
        <Col md={6} className="mb-4">
          <h5>React</h5>
          <ProgressBar now={60} label={`${60}%`} />
        </Col>
        <Col md={6} className="mb-4">
          <h5>Bootstrap</h5>
          <ProgressBar now={85} label={`${85}%`} />
        </Col>
        <Col md={6} className="mb-4">
          <h5>Node.js</h5>
          <ProgressBar now={60} label={`${60}%`} />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Skills;

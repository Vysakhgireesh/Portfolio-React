import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => (
  <section className="py-5" id="about">
    <Container>
      <h2 className="text-center mb-4 fs-2">About Me</h2>
      <Row className="justify-content-center fs-5 fw-normal">
        <Col md={8}>
          <p>
            I'm a Passionate and highly skilled in developing dynamic,
            high-performance web applications using the MERN stack (MongoDB,
            Express.js, React, and Node.js). Experienced in building scalable
            front-end interfaces with React and robust back-end services using
            Node.js and Express. Strong focus on writing clean, maintainable
            code, optimizing performance, and delivering seamless user
            experiences.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;

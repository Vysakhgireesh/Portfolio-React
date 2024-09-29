import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Contact = () => (
  <section className="bg-light py-5" id="contact">
    <Container>
      <h2 className="text-center mb-4">Contact Me</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <p className="text-center">
            Want to collaborate or need help with a project? Reach out to me!
          </p>
          <div className="text-center">
            <Button variant="primary" href="mailto:vysakhgireesh07@gmail.com">
              Get In Touch
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Contact;

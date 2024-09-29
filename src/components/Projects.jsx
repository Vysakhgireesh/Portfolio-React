import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import project1 from "../assets/keralatourism.jpg";
import project2 from "../assets/My ToDoList.jpg";
import project3 from "../assets/Creamycreations.jpg";

const Projects = () => (
  <section className="bg-light py-5" id="projects">
    <Container>
      <h2 className="text-center mb-4 fs-2">Projects</h2>
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={project1} />
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>
                KeralaTourism Website Using HTML,CSS & Bootstrap
              </Card.Text>
              <Button
                variant="primary"
                href="https://vysakhgireesh.github.io/KeralaTourism/"
              >
                View
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={project2} />
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>My ToDoList Using Javascript</Card.Text>
              <Button
                variant="primary"
                href="https://vysakhgireesh.github.io/ToDoList-Assignment/"
              >
                View
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={project3} />
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>Homemade Cakes Website</Card.Text>
              <Button
                variant="primary"
                href="https://vysakhgireesh.github.io/Sikha-static-website/"
              >
                View
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Projects;

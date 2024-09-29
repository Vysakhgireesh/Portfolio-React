import React from "react";
import { Container } from "react-bootstrap";
import image from "../assets/Vysakh.jpeg";
const Hero = () => (
  <section
    className="hero-section d-flex align-items-center bg-light text-center py-5"
    id="hero"
    style={{ height: "100vh", backgroundColor: "#f8f9fa" }}
  >
    <Container>
      <img src={image} className="Profilepic mb-5" alt="profileimage" />
      <h1 className="display-4">I am Vysakh G ,</h1>
      <p className="lead">
        Proficient in developing both front-end and back-end applications using
        modern technologies. Focused on building scalable, efficient, and
        user-friendly web solutions.
      </p>
    </Container>
  </section>
);

export default Hero;

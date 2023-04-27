import React from "react";
import Navigation from "./Navbar";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <div>
      <Navigation />
      <Container>
        <h1>Contact Us</h1>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
              </Form.Group><br/>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h4>Contact Information</h4>
            <p>Address: 123 Main St, Anytown USA</p>
            <p>Phone: 555-555-5555</p>
            <p>Email: info@yourcompany.com</p>
            <h4>Connect With Us</h4>
            <a href="https://www.facebook.com/"><i class="fab fa-facebook fa-2x"></i></a>
            <a href="https://twitter.com/"><i class="fab fa-twitter fa-2x"></i></a>
            <a href="https://www.instagram.com/"><i class="fab fa-instagram fa-2x"></i></a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

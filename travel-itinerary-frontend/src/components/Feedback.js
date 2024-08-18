import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import './Styles/Feedback.css'

const FeedbackForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3 mt-2">
        <Form.Control type="text" placeholder="Enter Name" />
        <Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 mt-2">
        <Form.Control type="number" placeholder="Enter Phone Number" />
        <Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 mt-2">
        <Form.Control type="number" placeholder="Enter ITS ID" />
        <Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control as="textarea" rows={3} placeholder="Enter Message" />
        <Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
      </Form.Group>
      <Button style={{backgroundColor:'#3a5a40', fontSize:'1.5rem', color:'#fff'}}variant="" type="submit" className="ezy__contact2-btn w-100">
        Submit
      </Button>
    </Form>
  );
};

const FeedbackFormCard = () => (
  <Card className="ezy__contact2-form-card">
    <Card.Body className="p-md-5">
      <h2 className="ezy__contact2-heading mb-3">Your Feedback</h2>
      <p className="ezy__contact2-sub-heading mb-5">
        Please provide your feedback here, so that we can improve. 
      </p>
      <FeedbackForm />
    </Card.Body>
  </Card>
);

const Feedback = () => {
  return (
    <section className="ezy__contact2 light">
      <div
        className="ezy__contact2-bg-holder"
        style={{
          background:'linear-gradient(45deg, rgb(58,90,76), #3a5a40)'
        }}
      >
        <Container>
          <Row className="py-4 justify-content-between">
            <Col lg={6} className="mb-5 mb-lg-0">
              <h2 className="ezy__contact2-title mb-3 mt-0 text-white">
                How can we help you?
              </h2>
              <p className="ezy__contact2-sub-heading mb-0 text-white">
                It’s easier to reach your savings goals when you have the right
                savings account. Take a look and find the right one for you!
              </p>
            </Col>
            <Col lg={5}>
              <FeedbackFormCard />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="ezy__contact2-blank-card" />
    </section>
  );
};

export default Feedback;
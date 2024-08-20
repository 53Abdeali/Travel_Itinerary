import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import "./Styles/Feedback.css";

const FeedbackForm = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    itsId: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        await axios.post("/api/feedback", formData);
        alert("Feedback sent successfully");
      } catch (error) {
        console.error("Error sending feedback:", error);
        alert("Error sending feedback");
      }
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3 mt-2">
        <Form.Control
          type="text"
          placeholder="Enter Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 mt-2">
        <Form.Control
          type="number"
          placeholder="Enter Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 mt-2">
        <Form.Control
          type="number"
          placeholder="Enter ITS ID"
          name="itsId"
          value={formData.itsId}
          onChange={handleChange}
          required
        />
        <Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
      </Form.Group>
      <Button
        style={{
          backgroundColor: "#3a5a40",
          fontSize: "1.5rem",
          color: "#fff",
        }}
        variant=""
        type="submit"
        className="ezy__contact2-btn w-100"
      >
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
          background: "linear-gradient(45deg, rgb(58,90,76), #3a5a40)",
        }}
      >
        <Container>
          <Row className="py-4 justify-content-between">
            <Col lg={6} className="mb-5 mb-lg-0">
              <h2 className="ezy__contact2-title mb-3 mt-0 text-white">
                Your Voice Is Crucial !
              </h2>
              <p className="ezy__contact2-sub-heading mb-0 text-white">
                Embark on your journey with the perfect plan and let us know how
                we're doing. Your valuable feedback guides us toward excellence!
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

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios'; // Import Axios for making HTTP requests

function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    sex: '',
    mobileNumber: '',
    email: '',
    numberOfPersons: '',
    date: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to backend
      await axios.post('/api/register', formData);
      alert('Registration successful');
      // Reset form fields
      setFormData({
        firstName: '',
        lastName: '',
        sex: '',
        mobileNumber: '',
        email: '',
        numberOfPersons: '',
        date: ''
      });
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed');
    }
  };

  return (
    <Container>
      <h2 className="mt-4">Registration Form</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formSex">
            <Form.Label>Sex</Form.Label>
            <Form.Control
              as="select"
              name="sex"
              value={formData.sex}
              onChange={handleInputChange}
              required
            >
              <option value="">Select sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formMobileNumber">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter mobile number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNumberOfPersons">
          <Form.Label>Number of Persons</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter number of persons"
            name="numberOfPersons"
            value={formData.numberOfPersons}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default Registration;

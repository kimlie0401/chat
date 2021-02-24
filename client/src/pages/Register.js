import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export const Register = () => {
  const [variables, setVariables] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const submitRegisterForm = (e) => {
    e.preventDefault();
    console.log(variables);
  };

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setVariables({
        ...variables,
        email: value,
      });
    }
    if (name === "username") {
      setVariables({
        ...variables,
        username: value,
      });
    }
    if (name === "password") {
      setVariables({
        ...variables,
        password: value,
      });
    }
    if (name === "confirmPassword") {
      setVariables({
        ...variables,
        confirmPassword: value,
      });
    }
  };
  return (
    <Row className="bg-white py-5 justify-content-center">
      <Col sm={8} md={6} lg={4}>
        <h1 className="text-center">Register</h1>
        <Form onSubmit={submitRegisterForm}>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={variables.email}
              name="email"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={variables.username}
              name="username"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={variables.password}
              name="password"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={variables.confirmPassword}
              name="confirmPassword"
              onChange={onChange}
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="success" type="submit">
              Register
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;

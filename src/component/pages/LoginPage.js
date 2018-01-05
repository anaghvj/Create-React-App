import React from "react";
import { Button, Form, Checkbox } from "semantic-ui-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <div>
        <h1>Login Page </h1>
      </div>
      <div>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;

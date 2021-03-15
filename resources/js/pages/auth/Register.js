import React from "react";
import { Container, Form, FormControl, InputGroup } from "react-bootstrap";

const Register = () => {
    return (
        <Container>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Username</Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>🌄</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            id="inlineFormInputGroup"
                            placeholder="HikeCzech"
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <>
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 8-20 characters long, contain
                        letters and numbers, and must not contain spaces,
                        special characters, or emoji.
                    </Form.Text>
                </>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password_confirmation"
                        placeholder="Password"
                    />
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Register;

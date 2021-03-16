import React, { useState } from "react";
import {
    Button,
    Container,
    Form,
    FormControl,
    InputGroup,
} from "react-bootstrap";

const Register = () => {
    const [
        { email, username, password, password_confirmation },
        setValues,
    ] = useState({
        email: "",
        username: "",
        password: "",
        password_confirmation: "",
    });
    const [errors, setErrors] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        let request_data = { email, username, password, password_confirmation };
        const response = await fetch("/register", {
            method: "POST",
            body: JSON.stringify(request_data),
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        });
        const response_data = await response.json();

        if (response.status == 200) {
            location.href = "/login";
        } else {
            setErrors(response_data.errors);
        }
    };

    const handleChange = (event) => {
        const allowed_names = [
                "username",
                "email",
                "password",
                "password_confirmation",
            ],
            name = event.target.name,
            value = event.target.value;

        if (-1 !== allowed_names.indexOf(name)) {
            setValues((prev_values) => {
                return { ...prev_values, [name]: value };
            });
        }
    };
    return (
        <Container>
            <Form action="/register" method="post" onSubmit={handleSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Username</Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>🌄</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            // id="inlineFormInputGroup"
                            // placeholder="HikeCzech"
                            type="text"
                            value={username}
                            name="username"
                            onChange={handleChange}
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        // placeholder="name@example.com"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </Form.Group>
                <>
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        type="password"
                        // id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        value={password}
                        name="password"
                        onChange={handleChange}
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
                        type="password"
                        // placeholder="Confirm Password"
                        value={password_confirmation}
                        name="password_confirmation"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Register;

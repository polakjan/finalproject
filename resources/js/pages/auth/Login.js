import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Login = () => {
    const [{ email, password }, setValues] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    /* const handleSubmit = async (event) => {
        event.preventDefault();

        let request_data = { email, password };
        const response = await fetch("/login", {
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
            location.href = "/user";
        } else {
            setErrors(response_data.errors);
        }
    };

    const handleLogout = async (event) => {
        event.preventDefault();

        const response = await fetch("/logout", {
            method: "POST",
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
            location.href = "/";
        } else {
            setErrors(response_data.errors);
        }
    }; */

    const handleChange = (event) => {
        const allowed_names = ["email", "password"],
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
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Login;

/*
<div className="d-flex justify-content-center align-items-center">
<form
                action="/logout"
                method="post"
                // onSubmit={handleLogout}
                className="w-auto pt-10"
            >
                <button>Logout</button>
            </form>

            <form
                action="/login"
                method="post"
                // onSubmit={handleSubmit}
                className="w-auto pt-10"
            >
                <div class="form-group">
                    <label htmlFor="">Email</label>
                    <br />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        class="form-control"
                    />
                </div>
                <div class="form-group">
                    <label htmlFor="">Password</label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        class="form-control"
                    />
                </div>

                <button type="submit" class="btn btn-primary">
                    Login
                </button>
                {/* display errors after validation *\/}
                {errors.email
                    ? errors.email.map((error) => (
                          <div key={error} className="error">
                              {error}
                          </div>
                      ))
                    : ""}
                <br />
            </form>
                    </div>
*/

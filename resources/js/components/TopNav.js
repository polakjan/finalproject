import React from "react";
import {
    Button,
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const TopNav = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">HikeCzech</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to={"/map"}>
                        <Nav.Link>Map</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"/login"}>
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"/register"}>
                        <Nav.Link>Register</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"/logout"}>
                        <Nav.Link>Logout</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.2">
                            Favourites
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/submit">
                            Submit a destination
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/logout">
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;

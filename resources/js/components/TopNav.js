import React, { useContext } from "react";
import {
    Button,
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { UserContext } from "../Hike";
import Logout from "../pages/auth/Logout";

function User(props) {
    const user = useContext(UserContext);

    // console.log("user data in User component", user);

    if (user) {
        console.log(user);
        return (
            <>
                <Nav.Link disabled>Hello, {user && user.username}</Nav.Link>
                <LinkContainer to={""}>
                    <Nav.Link>
                        <Logout />
                    </Nav.Link>
                </LinkContainer>
            </>
        );
    }

    return (
        <>
            <LinkContainer to={"/login"}>
                <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/register"}>
                <Nav.Link>Register</Nav.Link>
            </LinkContainer>
        </>
    );
}

const TopNav = () => {
    return (
        <Navbar collapseOnSelect bg="light" expand="lg">
            <Navbar.Brand href="/">HikeCzech</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to={"/map"}>
                        <Nav.Link>Map</Nav.Link>
                    </LinkContainer>
                    <User />
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.2">
                            Favourites
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/submit">
                            Contribute
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
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

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
        <Navbar collapseOnSelect bg="white" expand="lg" fixed="top">
            <Navbar.Brand href="/">HikeCzech</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to={"/map"}>
                        <Nav.Link>Map</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"/favs"}>
                        <Nav.Link>Favourites</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"/submit"}>
                        <Nav.Link>Contribute</Nav.Link>
                    </LinkContainer>

                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Nav>

                <User />
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import { getToken, removeUserSession, getUser } from "../Utils/Common";
import { useHistory } from "react-router-dom";

function NavBar(props) {
  const user = getUser();
  const history = useHistory();
  const handleLogout = () => {
    removeUserSession();
    history.push("/SignIn");
  };

  return (
    <div>
      <Navbar style={{ backgroundColor: "red" }} expand="lg">
        <Container>
          <Navbar.Brand href="/" style={{ color: "white" }}>
            Fun Theatre
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link href="/Movies" style={{ color: "white" }}>
                Movies
              </Nav.Link>

              {getToken() ? (
                <Nav.Link href="/TicketCard" style={{ color: "white" }}>
                  Card
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link href="/SignIn" style={{ color: "white" }}>
                    SignIn
                  </Nav.Link>
                  <Nav.Link href="/SignUp" style={{ color: "white" }}>
                    SignUp
                  </Nav.Link>
                </>
              )}
            </Nav>
            <Form className="d-flex">
              {getToken() ? (
                <NavDropdown
                  title={user.name}
                  id="basic-nav-dropdown"
                  style={{ color: "white" }}
                >
                  <NavDropdown.Item>
                    <Nav.Link onClick={handleLogout}>SignOut</Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>
              ) : null}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

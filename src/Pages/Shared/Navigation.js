import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import logo from "../../images/logo.png"
import { Link } from "react-router-dom";
import useAuth from './../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
       <div>
          <Navbar
             className=""
             style={{
                backgroundColor: "#241f1f",
             }}
             //  bg="dark"
             variant="dark"
             sticky="top"
             collapseOnSelect
             expand="lg"
          >
             <Container>
                <Navbar.Brand href="/home">
                   <img
                      src={logo}
                      width="75"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                   />{" "}
                   <div className="d-inline-block pt-2">
                      <span className="">
                         N E W B R I G H T <br />E C O M M E R C E
                      </span>
                   </div>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                   <Nav.Link as={Link} to="/home" className="text-white">
                      HOME
                   </Nav.Link>
                   <Nav.Link
                      as={Link}
                      to="/new-arrivals"
                      className="text-white"
                   >
                      SHOP
                   </Nav.Link>
                   <Nav.Link to="/home" className="text-white">
                      EXPLORE
                   </Nav.Link>
                   {user?.displayName ? (
                      <Nav.Link to="/myplans" className="text-white">
                         My Plans
                      </Nav.Link>
                   ) : (
                      ""
                   )}
                   {user?.displayName ? (
                      <Nav.Link to="/manageplans" className="text-white">
                         Manage All Plans
                      </Nav.Link>
                   ) : (
                      ""
                   )}
                   {user?.displayName ? (
                      <Nav.Link to="/addplan" className="text-white">
                         Add A Plan
                      </Nav.Link>
                   ) : (
                      ""
                   )}

                   {user?.displayName ? (
                      <Button
                         className="text-white"
                         onClick={logOut}
                         variant=""
                      >
                         Logout
                      </Button>
                   ) : (
                      <div className="">
                         <Nav.Link as={Link} to="/login" className="text-white">
                            LOGIN/REGISTER
                         </Nav.Link>
                      </div>
                   )}
                   <Navbar.Text className="log-in">
                      {user?.displayName ? (
                         <span className="me-2 text-white">Signed in as:</span>
                      ) : (
                         ""
                      )}
                      <a href="#login">
                         {user?.displayName}{" "}
                         <img
                            src={user?.photoURL}
                            className="rounded-circle ms-3"
                            style={{ width: "55px" }}
                            alt=""
                         />
                      </a>
                   </Navbar.Text>
                   <Form className="d-flex">
                      <Form.Control
                         type="search"
                         placeholder="Search"
                         className="me-2"
                         aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                   </Form>
                </Navbar.Collapse>
             </Container>
          </Navbar>
       </div>
    );
};

export default Navigation;
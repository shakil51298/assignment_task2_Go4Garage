import { FormControl } from '@material-ui/core';
import React, { useContext } from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const Navigationbar = () => {
    const [loggedInUser , setLoggedInUser] = useContext(userContext);

    const handleLogOut = () => {
        setLoggedInUser('');
        alert("logged out Succesfully")
    }
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Go4Garage</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link>
                        <Link to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/user/signup">SignUp</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link onClick={handleLogOut}>log Out</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigationbar;
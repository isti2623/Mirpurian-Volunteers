import React from 'react';
import { Container, Nav, Navbar, Stack, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const BottomHeader = () => {
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Link to='/'> <Navbar.Brand><img src={logo} alt="" srcset="" /><span className='fw-bold text-dark fs-2 ms-2 mt-5'>Mirpurian Volunteers</span></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Stack direction="horizontal" gap={3}>
                                <NavLink
                                    className='top-header-auth login  text-secondary'
                                    to="/home"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    className='top-header-auth text-secondary'
                                    to="/about"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    className='top-header-auth  text-secondary'
                                    to="/event"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Event
                                </NavLink>
                                <NavLink
                                    className='top-header-auth  text-secondary'
                                    to="/blog"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Blog
                                </NavLink>
                                <NavLink
                                    className='top-header-auth text-secondary'
                                    to="/contact"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Contact
                                </NavLink>
                                <Link className='top-header-auth' to='admin'> <Button className='mt-1 rounded' variant="outline-success">Admin</Button></Link>
                            </Stack>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default BottomHeader;
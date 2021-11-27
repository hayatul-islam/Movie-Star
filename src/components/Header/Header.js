import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <Image src="https://www.klevermedia.co.uk/html_templates/movie_star_html/images/logo.svg" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="movies">Movies</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
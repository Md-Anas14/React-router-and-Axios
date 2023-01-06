import React from 'react';
import {Container,Nav,Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";



function NavScrollExample() {
    return (
     <div>
  <Navbar expand="lg" className='bg-dark '  bg="light">
      <Container>
            <Navbar.Brand href="#" className='text-white me-5'>Navbar</Navbar.Brand>
            <Navbar.Toggle className='bg-white' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
        <Link to="/"  className="ps-5 text-white text-decoration-none">HOME</Link>
        <Link to ="/About" className="ps-5 text-white text-decoration-none">About</Link>
        <Link to ="/Contact-us" className="ps-5 text-white text-decoration-none">Contact us</Link>
        <Link to ="/Axioss" className="ps-5 text-white text-decoration-none">Axioss</Link>
       
              </Nav>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
     
    );
  }
  
  export default NavScrollExample;


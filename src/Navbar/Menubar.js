import React from 'react' ;
import {Navbar,Nav} from 'react-bootstrap' ;
import './Menubar.css' ;
import logo from '../Images/logo.jpg'
const Menubar = () => {
    return (
        <div>
        <Navbar expand="lg" className="menubar">
          <Navbar.Brand href="/"><img src={logo} ></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/aboutus">About us</Nav.Link>
                    <Nav.Link href="/donate">Donate</Nav.Link>
                    <Nav.Link href="/contactus">Contact us</Nav.Link>
                    <Nav.Link href="/gallery">Gallery</Nav.Link>
                    
                  </Nav>

          </Navbar.Collapse>
        </Navbar>
        <div class = "footer">
          <p>
            <a class="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/disha-chavan-999247200">
              <span class="fa fa-linkedin"></span>
            </a>
            <a class="btn btn-social-icon btn-github" href="https://github.com/disha4091">
              <span class="fa fa-github"></span>
            </a>
            <a class="btn btn-social-icon btn-instagram" href="https://www.instagram.com/disha_827/">
              <span class="fa fa-instagram"></span>
            </a>
            
          </p>
        </div>
        </div>
    )
}

export default Menubar

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

import Home from './Components/Home';
import About from './Components/About';
import GetInvolved from './Components/GetInvolved';
import { Nav, NavbarBrand } from 'react-bootstrap';

function BootstrapNavbar() {
  return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Navbar bg="dark" expand="lg" sticky="top">
                <Navbar.Brand href="#home">Music 4 All</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav classname="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Router>
          </div>
        </div>
      </div>
  )
}
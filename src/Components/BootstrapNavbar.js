import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';

import Home from './Home';
import About from './About';
import GetInvolved from './GetInvolved';
import { Nav } from 'react-bootstrap';

function BootstrapNavbar() {
  return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Navbar bg="#fff" expand="lg" sticky="top">
                <Navbar.Brand href="#home">Music 4 All</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/getinvolved">Get Involved</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/getinvolved">
                  <GetInvolved />
                </Route>
              </Switch>

            </Router>
          </div>
        </div>
      </div>
  )
};

export default BootstrapNavbar;
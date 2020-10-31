import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { Nav, Navbar } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';

import Home from './Home';
import About from './About';
import GetInvolved from './GetInvolved';

function BootstrapNavbar() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Router>
          
            <Navbar bg="#fff" expand="lg" sticky="top">
              <Navbar.Brand as={Link} to="/">Music 4 All</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                
                  {/* we use as={Link} to tell the compiler 
                  to consider the NavLink object as a 
                  react router Link object instead
                  this prevents the browser from reloading*/}
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/about">About</Nav.Link>
                  <Nav.Link as={Link} to="/getinvolved">Get Involved</Nav.Link>
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
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

import Home from './Components/Home';
import About from './Components/About';
import GetInvolved from './Components/GetInvolved';
import BootstrapNavbar from './Components/BootstrapNavbar';

import { NavbarBrand } from 'react-bootstrap';

function App() {
  return (
    <BootstrapNavbar />
    // <Router>

    //   <div className="App">
    //     <nav>
    //       <Link to="/">Home</Link>{' '}
    //       <Link to="/about">About</Link>{' '}
    //       <Link to="/getinvolved">Get Involved</Link>{' '}
    //     </nav>
    //     {/* <Route exact path="/" comonent={Home}/> */}
    //     <Route exact path="/" render={() => <Home/>}/>
    //     <Route path="/about" component={About}/>
    //     <Route path="/getinvolved" component={GetInvolved}/>
    //   </div>
    // </Router>
  );
}

export default App;

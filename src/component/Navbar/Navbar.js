import React, {Component} from 'react';

//Assets
import logo from './logoCart.png';
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
    <div className="App-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={logo} width="50" height="50" className="d-inline-block align-top" alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="linkClass" href="#">Home</a>
            <a className="linkClass" href="#">My cart</a>
          </div>
        </div>
      </nav>
    </div>);
  }
}

export default Navbar;

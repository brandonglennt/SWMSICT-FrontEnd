/**
*
* Navbar
*
*/

import React from 'react';
import { Link } from 'react-router';

import './style.css';
import './styleM.css';

import Bars from 'react-icons/lib/fa/bars';

export default class Navbar extends React.PureComponent {

  constructor(){
    super();
    this.state = {
      menuOpen:false,
    }
  }

  handleMenu = () => {
    if(this.state.menuOpen === true)
    {
      this.setState({
        menuOpen:false
      })
    }
    else if (this.state.menuOpen === false)
    {
      this.setState({
        menuOpen:true
      })
    }
  }

  renderMenu(){
    if(this.state.menuOpen === true) {
      return(
        <nav className="navMobile">
          <Link to="/" className="navButton">Home</Link>
          <Link to="/Search" className="navButton">Submission</Link>
          <Link to="Login" className="Login"></Link>
        </nav>
      )
    }
  }

  render() {
    return (
      <div>
        <nav className="navBar">
          <div className="siteName">
            <a href="/">
              <img className="homeLogo" src={require("../../photos/logo-white.png")} alt="SWMS Logo" title="Home"/>
            </a>

          </div>
          <div className="nav">
            <Link to="/" className="navButton">HOME</Link>
            <Link to="/UserInfo" className="navButton">SEARCH</Link>
            <Link to="/Education" className="navButton">LEARN</Link>
            <Link to="/Services" className="navButton">SERVICES</Link>
            <Link to="/Contact" className="navButton">CONTACT</Link>
            <Link to="/Results" className="navButton">RESULTS</Link>
            <Link to="/Logout" className="navButton">LOGOUT</Link>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.contextTypes = {
  router: React.PropTypes.object
};

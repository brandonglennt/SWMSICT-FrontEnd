/**
*
* SignInBox
*
*/

import React from 'react';
import FaClose from 'react-icons/lib/fa/close';

import './style.css';
import './styleM.css';

export default class SignInBox extends React.PureComponent {
  render() {
    return (
      <div className="signInBox">
        <div className="signInHeader">
          <p> &nbsp;
            <div className="closeSignInX">
                <FaClose className="signInX"/>
            </div>
          </p>
        </div>
        <br/>
        <div className="signInContent">
          <img src={require("../../photos/login-username.svg")}/>
          <input type="text" className="signInInput" name="email" placeholder="Email"></input><br/>
          <img src={require("../../photos/login-password.svg")}/>
          <input type="password" className="signInInput" name="password" placeholder="Password"></input>
          <br/>
          <div>
            <input type="button" value="Log In" className="logInButton"></input>
          </div>
        </div>
      </div>
    );
  }
}

SignInBox.contextTypes = {
  router: React.PropTypes.object
};

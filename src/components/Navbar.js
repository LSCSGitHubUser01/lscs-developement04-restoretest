import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

export default class Navbar extends Component {
  handleLogOut = async event => {
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
    }catch(error) {
      console.log(error.message);
    }
  }
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="../BryantLake.JPG" width="150" height="50" alt="LBFP logo" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" style={{ textDecoration: 'none' }} className="navbar-item">
              Home
            </a>
            </div>

          <div className="navbar-start">
            <a href="/mycomponent" style={{ textDecoration: 'none' }} className="navbar-item">
              MyComponent
            </a>
            </div>

        <div className="navbar-start">
            <a href="/mycomponent01" style={{ textDecoration: 'none' }} className="navbar-item">
              MyComponent01
            </a>
            </div>
  
  
      <div className="navbar-start">
            <a href="/mycomponent02" style={{ textDecoration: 'none' }} className="navbar-item">
              MyComponent02
            </a>
            </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {this.props.auth.isAuthenticated && this.props.auth.user && (
              <p >Hello {this.props.auth.user.username}</p>
              )}
              <div className="buttons">
                {!this.props.auth.isAuthenticated && (
                  <div>
                    <a href="/register" style={{ textDecoration: 'none' }} className="button is-primary">
                      <strong>Register </strong>
                    </a>
                    <a href="/login" style={{ textDecoration: 'none' }} className="button is-light">
                      Log in
                    </a>
                   </div>
                )}
                {this.props.auth.isAuthenticated && (
                  <a href="/" onClick={this.handleLogOut} style={{ textDecoration: 'none' }} className="button is-light">
                    Log out
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

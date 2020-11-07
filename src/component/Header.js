import React, { Component } from "react";
import "./Myweb.css";
import { NavLink } from "react-router-dom";
import Logo from "../logo.jpeg";

export default class main extends Component {
  render() {
    return (
      <header>
        <div className="container header-wrap">
          <div className="block left pro-wrap">
            <img className="pro-pic" src={Logo} alt="logo"/>
          </div>
          <div className="block right">
            <nav className="nav-link">
              <NavLink activeClassName="active" exact to="/">About </NavLink>
              <NavLink activeClassName="active" exact to="/Work">Works</NavLink>
              <a href="https://github.com/sivin-git" className="nav_contact">
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}


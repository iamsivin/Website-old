import React, { Component } from "react";
import "./Myweb.css";
import { Link } from "react-router-dom";
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
              <div className="nav-link" /> 
              <Link className="active_link" to="/">About </Link>
              <Link className="active_link" to="/Work">Works</Link>
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


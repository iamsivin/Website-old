import "./Header.css";
import React, { Component } from "react";
import { Link } from "react-scroll";
import Logo from "../logo.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default class ScrollToTop extends Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <header>
        <div className="container header-wrap">
          <div className="block left pro-wrap">
            <LazyLoadImage
              className="pro-pic"
              src={Logo}
              effect="blur"
              onClick={() => this.scrollToTop()}
              alt=""
              title="Scroll to top"
            />
          </div>
          <div className="block right">
            <div className="nav-link">
              <Link
                activeClass="active"
                className="about-link"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
              >
                About
              </Link>
              <Link
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
              >
                Works
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={400}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

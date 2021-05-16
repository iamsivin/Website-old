import React, { Component } from "react";
import Header from "./component/Header";
import About from "./component/About";
import Contact from "./component/Contact";
import Works from "./component/Works";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 611;
    if (isMobile) {
      return (
        <div className="App">
          <Header />
          <About />
          <Contact />
          <Works />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header />
          <About />
          <Works />
          <Contact />
        </div>
      );
    }
  }
}

import "./Header.css";
import { NavLink } from "react-router-dom";
import Logo from "../logo.jpeg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

 const Header = () => {
    return (
      <header>
        <div className="container header-wrap">
          <div className="block left pro-wrap">
            <LazyLoadImage className="pro-pic" src={Logo} effect="blur" alt=""/>
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
export default Header;
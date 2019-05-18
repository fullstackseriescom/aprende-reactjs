import React from "react";
import { Link } from "react-router-dom";

// class component
class Header extends React.Component {
  render() {
    return (
      <header>
        <div>Logo</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    );
  }
}

export default Header;

import React from "react";

// class component
class Header extends React.Component {
  render() {
    return (
      <header>
        <div>Logo</div>
        <nav className="nav">
          <a href="#/">Home</a>
          <a href="#/">Blog</a>
          <a href="#/">Photos</a>
          <a href="#/">Contact</a>
        </nav>
      </header>
    );
  }
}

export default Header;

import React, { Component } from "react";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostList from "./components/PostList";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PostList />
        <Footer />
      </div>
    );
  }
}

export default App;

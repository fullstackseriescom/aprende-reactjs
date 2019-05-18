import React from "react";
import PostList from "../components/PostList";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Blog</h1>
        <PostList />
      </div>
    );
  }
}

export default Home;

import React from "react";

import PostItem from "../components/PostItem";

class Post extends React.Component {
  state = {
    post: null
  };

  componentDidMount() {
    let postId = this.props.match.params.id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(post => this.setState({ post }));
  }

  render() {
    if (this.state.post) {
      return (
        <div>
          <PostItem post={this.state.post} />
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
}

export default Post;

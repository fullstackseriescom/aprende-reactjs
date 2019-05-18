import React from "react";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

class PostList extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }

  handleSubmit = event => {
    event.preventDefault();
    const lastPost = this.state.posts.slice(-1).pop();
    let newPostObj = {
      id: lastPost ? lastPost.id + 1 : 0,
      title: event.target.title.value,
      body: event.target.body.value
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(newPostObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(newPost => {
        const posts = [...this.state.posts, newPost];
        this.setState({ posts: posts });
      });
  };

  handleDelete = postToDelete => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postToDelete.id}`, {
      method: "DELETE"
    }).then(response => {
      let posts = this.state.posts.filter(post => post.id !== postToDelete.id);
      this.setState({ posts: posts });
    });
  };

  render() {
    let posts = this.state.posts;
    if (posts) {
      return (
        <div>
          <PostForm onSubmit={this.handleSubmit} />
          {posts.map(post => (
            <PostItem key={post.id} post={post} onDelete={this.handleDelete} />
          ))}
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
}

export default PostList;

import React, { useEffect, useState } from "react";

import PostForm from "./PostForm";
import PostItem from "./PostItem";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(postsRes => setPosts(postsRes));
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const lastPost = posts.slice(-1).pop();
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
        const postsRes = [...posts, newPost];
        setPosts(postsRes);
      });
  };

  const handleDelete = postToDelete => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postToDelete.id}`, {
      method: "DELETE"
    }).then(response => {
      let postsRes = posts.filter(post => post.id !== postToDelete.id);
      setPosts(postsRes);
    });
  };

  if (posts) {
    return (
      <div>
        <PostForm onSubmit={handleSubmit} />
        {posts.map(post => (
          <PostItem key={post.id} post={post} onDelete={handleDelete} />
        ))}
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default PostList;

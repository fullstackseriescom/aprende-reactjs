import React, { useEffect, useState } from "react";

import PostItem from "../components/PostItem";

const Post = props => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    let postId = props.match.params.id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(postRes => setPost(postRes));
  }, []);

  if (post) {
    return (
      <div>
        <PostItem post={post} />
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default Post;

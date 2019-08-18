import React, { useEffect, useRef } from "react";

const PostForm = props => {
  const titleInput = useRef(null);
  useEffect(() => {
    titleInput.current.focus();
  }, []);

  return (
    <form onSubmit={props.onSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleInput} />
      </div>
      <div>
        <label htmlFor="body">Content</label>
        <textarea id="body" />
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default PostForm;

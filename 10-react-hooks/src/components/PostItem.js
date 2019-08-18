import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

const PostItem = props => {
  const onDelete = e => {
    e.preventDefault();
    props.onDelete(props.post);
  };
  return (
    <div>
      <h1>
        <Link to={`/post/${props.post.id}`}>{props.post.title}</Link>
      </h1>
      <p>{props.post.body}</p>
      {props.onDelete && <button onClick={onDelete}>Delete</button>}
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

export default PostItem;

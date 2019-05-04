import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class PostItem extends React.Component {
  constructor() {
    super();
    console.log("constructor ejecutado");
  }
  componentDidMount() {
    console.log("componentDidMount ejecutado");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate ejecutado");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount ejecutado");
  }
  onDelete = e => {
    e.preventDefault();
    this.props.onDelete(this.props.post);
  };
  render() {
    console.log("render ejecutado");
    return (
      <div>
        <h1>
          <Link to={`/post/${this.props.post.id}`}>
            {this.props.post.title}
          </Link>
        </h1>
        <p>{this.props.post.body}</p>
        {this.props.onDelete && <button onClick={this.onDelete}>Delete</button>}
      </div>
    );
  }
}

PostItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

export default PostItem;

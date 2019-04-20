import React from "react";

class PostForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.titleInput = React.createRef();
  // }

  componentDidMount() {
    // this.titleInput.current.focus();
    this.titleInput.focus();
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          {/*<input type="text" id="title" ref={this.titleInput} />*/}
          <input
            type="text"
            id="title"
            ref={input => (this.titleInput = input)}
          />
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
  }
}

export default PostForm;

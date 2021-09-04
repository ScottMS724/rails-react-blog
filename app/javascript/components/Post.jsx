import React from "react";
import { Link } from "react-router-dom";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: { content: "" } };
    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    const {
      match: { params: { id } }
    } = this.props;

    const url = `/api/v1/posts/${id}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ post: response }))
      .catch(() => this.props.history.push("/posts"));
  }

  deletePost() {
    const { match: { params: { id } } } = this.props;
    const url = `/api/v1/destroy/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => this.props.history.push("/posts"))
      .catch(error => console.log(error.message));
  }

  render() {
    const { post } = this.state;

    return (
      <div className="bg-image">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src={post.image}
            alt={`${post.title} image`}
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {post.title}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-7">
              <h5 className="mb-2">{post.title}</h5>
              <div className="textarea-space">{post.content}</div>
            </div>
            <div className="col-sm-12 col-lg-2">
              <button type="button" className="btn btn-danger" onClick={this.deletePost}> 
                Delete Blog Post
              </button>
            </div>
          </div>
          <Link to="/posts" className="btn btn-link">
            Back to all blog posts.
          </Link>
        </div>
      </div>
    );
  }

}

export default Post;
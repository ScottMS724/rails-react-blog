import React from "react";
import { Link } from "react-router-dom";

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      image: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = "/api/v1/posts/create";
    const { title, content, image } = this.state;

    if (title.length == 0 || content.length == 0 || image.length == 0)
      return;

    const body = {
      title,
      content,
      image
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.props.history.push(`/posts/${response.id}`))
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Add a new blog post.
            </h1>

            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="postTitle">Title</label>
                <input
                  type="text"
                  name="title"
                  id="postTitle"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="postContent">Image</label>
                <input
                  type="text"
                  name="image"
                  id="postImage"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
                <small id="imageHelp" className="form-text text-muted">
                  Use a .jpg image.
                </small>
              </div>

              <label htmlFor="content">Content</label>
              <textarea
                className="form-control"
                id="content"
                name="content"
                rows="5"
                required
                onChange={this.onChange}
              />

              <button type="submit" className="btn custom-button mt-3">
                Create Blog Post 
              </button>
              <Link to="/posts" className="btn btn-link mt-3">
                Back to all posts
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default NewPost;
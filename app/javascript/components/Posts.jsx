import React from "react";
import { Link } from "react-router-dom";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const url = "/api/v1/posts/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ posts: response }))
      .catch(() => this.props.history.push("/"));
}

render() {
  const { posts } = this.state;

  const allPosts = posts.map((post, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <img src={post.image} className="card-img-top" alt={`${post.title} image`}/>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <Link to={`/posts/${post.id}`} className="btn custom-button">
            View Blog Post
          </Link>
        </div>
      </div>
    </div>
  ));

  const noPosts = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No blog posts yet. <Link to="/new_post">Create your first one.</Link>
      </h4>
    </div>
  );

  return (
    <div className="bg-image">
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">All Blog Posts</h1>
          <p className="lead text-muted">
            Musings about tech, programming, and hobbies.
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-right mb-3">
            <Link to="/new_post" className="btn custom-button">
              Create New Post
            </Link>
          </div>
          <div className="row">
            {posts.length > 0 ? allPosts : noPosts}
          </div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
    </div>
  );
}

}

export default Posts;
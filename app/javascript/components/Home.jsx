import React from "react";
import { Link } from "react-router-dom";
import Headshot from '/app/assets/images/nantucketheadshot.jpg'

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center bg-image">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
      <img className="img-thumbnail" src={Headshot} alt=""/>
        <h1 className="display-4">Scott's Tech and Other Things Blog</h1>
        <p className="lead">
          Hi, I'm Scott and this is my blog on programming, tech, and hobbies. Welcome!
        </p>
        <hr className="my-4" />
        <Link
          to="/posts"
          className="btn btn-lg custom-button"
          role="button"
        >
          View All Blog Posts 
        </Link>
      </div>
    </div>
  </div>
);
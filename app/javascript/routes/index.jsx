import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Posts from "../components/Posts";
import Post from "../components/Post";
import NewPost from "../components/NewPost";

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/posts/:id" component={Post} />
      <Route exact path="/new_post" component={NewPost} />
    </Switch>
  </Router>
);
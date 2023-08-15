import React, { Component } from "react";
import Loader from "./Loader";
import PostItem from "./PostItem";
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
    };
  }

  loadContent() {
    setTimeout(() => {
      return this.setState({ isLoaded: true });
    }, 2000);
  }

  componentDidMount() {
    this.loadContent();
    console.log("hello");
  }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
        </div>

        <div class={css.SearchResults}>
          {this.state.isLoaded === false ? (
            <Loader />
          ) : (
            <PostItem posts={savedPosts} />
          )}
        </div>
      </div>
    );
  }
}

export default Content;

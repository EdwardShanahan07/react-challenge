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
      posts: [],
    };
  }

  handleChange(event) {
    const inputText = event.target.value;
    const filteredPosts = savedPosts.filter((post) => {
      return post.name.toLowerCase().includes(inputText);
    });

    this.setState({ posts: filteredPosts });

    console.log(filteredPosts);
  }

  loadContent() {
    setTimeout(() => {
      return this.setState({ isLoaded: true, posts: savedPosts });
    }, 2000);
  }

  componentDidMount() {
    this.setState({ posts: savedPosts });
    this.loadContent();
  }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>

          <form>
            <label>Search:</label>
            <input
              id="searchInput"
              onChange={(event) => this.handleChange(event)}
              type="search"
              placeholder="By Author"
            />
            <h4>posts found: {this.state.posts.length}</h4>
          </form>
        </div>

        <div class={css.SearchResults}>
          {this.state.isLoaded === false ? (
            <Loader />
          ) : (
            <PostItem posts={this.state.posts} />
          )}
        </div>
      </div>
    );
  }
}

export default Content;

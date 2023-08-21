import React, { Component } from "react";
import axios from "axios";
import API_KEY from "../secrets";
import Loader from "./Loader";
import PostItemAPI from "./PostItemAPI";
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      posts: [],
      savedPosts,
    };
  }

  handleChange(event) {
    const inputText = event.target.value;
    const filteredPosts = this.state.savedPosts.filter((post) => {
      return post.user.toLowerCase().includes(inputText);
    });

    this.setState({ posts: filteredPosts });

    console.log(filteredPosts);
  }

  componentDidMount() {
    this.fetchedImages();
  }

  async fetchedImages() {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&per_page=100`
    );
    const fetchedPosts = response.data.hits;

    this.setState({
      isLoaded: true,
      posts: fetchedPosts,
      savedPosts: fetchedPosts,
    });
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
            <PostItemAPI savedPosts={this.state.posts} />
          )}
        </div>
      </div>
    );
  }
}

export default Content;

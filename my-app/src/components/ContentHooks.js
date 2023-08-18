import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import PostItem from "./PostItem";
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";

function ContentHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fetchedPosts, setFetchedPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setFetchedPosts(savedPosts);
      setIsLoaded(true);
    }, 2000);
  }, []);

  const handleChange = (event) => {
    const name = event.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter((post) => {
      return post.name.toLowerCase().includes(name);
    });

    setFetchedPosts(filteredPosts);
  };

  return (
    <div className={css.Content}>
      <div className={css.TitleBar}>
        <h1>My Photos</h1>

        <form>
          <label>Search:</label>
          <input
            id="searchInput"
            onChange={(event) => handleChange(event)}
            type="search"
            placeholder="By Author"
          />
          <h4>posts found: {fetchedPosts.length}</h4>
        </form>
      </div>

      <div class={css.SearchResults}>
        {isLoaded === false ? <Loader /> : <PostItem posts={fetchedPosts} />}
      </div>
    </div>
  );
}

export default ContentHooks;

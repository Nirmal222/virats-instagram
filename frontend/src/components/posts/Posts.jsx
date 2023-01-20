import React, { useState, useEffect } from "react";
import "./Posts.css";
import { ImSpinner3 } from "react-icons/im";
import { getPosts, handleScroll } from "../../utils";
import { PostsGrid, PostsReels, PostsTagged } from "../../utils/icons";
import AllPosts from "./AllPosts/AllPosts";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPosts(page).then((data) => {
      setPosts((posts) => [...posts, ...data]);
      setLoading(false);
    });
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll(setPage));
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  return (
    <div id="posts-container">
      <div id="postsnav">
        <span>
          <PostsGrid />
          <p>Posts</p>
        </span>
        <span>
          <PostsReels />
          <p>Reels</p>
        </span>
        <span>
          <PostsTagged />
          <p>Tagged</p>
        </span>
      </div>
      <AllPosts posts={posts} />
      {loading && <ImSpinner3 id="spinner" />}
    </div>
  );
};

export default Posts;

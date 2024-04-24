// eslint-disable-next-line no-unused-vars
import React from "react";
import PostList from "../components/Post/PostList";
import PostForm from "../components/Post/PostForm";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <PostForm />
      <PostList />
    </div>
  );
};

export default Home;

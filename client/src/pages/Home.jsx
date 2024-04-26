// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import PostForm from "../components/PostForm";
import Posts from "../components/Posts";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem("users"));

    if (!userLocalStorage) return navigate("/register");
  }, []);

  return (
    <div className="p-4  ">
      <PostForm setPosts={setPosts} posts={posts} />
      <Posts posts={posts} />
    </div>
  );
};

export default Home;

// eslint-disable-next-line no-unused-vars
import {useState} from "react";
import PostForm from "../components/PostForm";
import Posts from "../components/Posts";



const Home = () => {
  const [posts, setPosts] = useState([]);
  return (
    <div className="p-4 " >
      <h1 className="text-pink-400 hover:uppercase hover:text-green-600">
        Home
      </h1>
      <PostForm setPosts={setPosts} posts={posts}/>
      <Posts posts={posts}/>
    </div>
  );
};

export default Home;

/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Post from "../Post";


const Posts = ({ posts }) => {
  const [likes, setLikes] = useState(posts.map(() => false));

  
  const handleLike = (index) => {
    setLikes(prevLikes => {
      const newLikes = [...prevLikes];
      newLikes[index] = !newLikes[index]; 
      return newLikes;
    });
  };

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <Post {...post} index={index} />
          <p>{post.content}</p>
          
          <button onClick={() => handleLike(index)}>{likes[index] ? "Unlike" : "Like"}</button>
          <p>Likes: {likes[index] ? post.likes + 1 : post.likes}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;

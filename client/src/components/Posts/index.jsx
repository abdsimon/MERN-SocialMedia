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
      
      ))}
    </div>
  );
};

export default Posts;
